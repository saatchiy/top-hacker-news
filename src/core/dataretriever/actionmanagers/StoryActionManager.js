import Comm from 'core/dataretriever/ServerCommunicator';
import GetTopStoriesCall from 'core/dataretriever/calls/GetTopStoriesCall';
import GetItemCall from 'core/dataretriever/calls/GetItemCall';

import TopStoryIDsLoadedActionPayload from 'core/dataretriever/actions/reactions/TopStoryIDsLoadedActionPayload';
import ErrorOccurredActionPayload from 'core/dataretriever/actions/reactions/ErrorOccurredActionPayload';
import StoriesLoadedActionPayload from 'core/dataretriever/actions/reactions/StoriesLoadedActionPayload';
import CommentsLoadedActionPayload from 'core/dataretriever/actions/reactions/CommentsLoadedActionPayload';

import Comment from 'core/data/Comment';
import * as ItemTypes from 'core/data/ItemTypes';

const CLASS_NAME = 'StoryActionManager:';

/**
 * Implementation of a class that executes async calls to the server and
 * informs the stores about the results.
 * 
 * @class StoryActionManager
 */
class StoryActionManager {
    constructor(dispatcher) {
        this._dispatcher = dispatcher;
    }

    /**
     * Loads the id of top specified number of stories
     * 
     * @param {number} numberOfStories Number of top stories which will be loaded
     * @memberof StoryActionManager
     */
    loadTopStoryIDs(numberOfStories) {
        Comm.executeCall(new GetTopStoriesCall()).then((topStoriesJSON) => {
            console.log(CLASS_NAME, 'Top stories ids loaded successfully.');
            this._dispatcher.dispatch(new TopStoryIDsLoadedActionPayload(topStoriesJSON));
        }).catch((error) => {
            console.error(CLASS_NAME, error);
            this._dispatcher.dispatch(new ErrorOccurredActionPayload(error));
        });
    }

    /**
     * Loads an array of stories and when all stories are loaded
     * dispatches an action.
     * If loading of a story fails dispatches an error.
     * 
     * @param {any} ids 
     * @memberof StoryActionManager
     */
    loadStories(ids) {

        let storiesJSON = [];
        let failedStoryId = 0;
        let promises = [];

        // Loading each individual story
        for(let id of ids) {
            promises.push(
                this._loadItem(id).then((storyJSON) => {
                    storiesJSON.push(storyJSON);
                }).catch((error) => {
                    failedStoryId = id;
                })
            );
        }

        // Waits for all the promises to resolve
        Promise.all(promises).then(() => {
            console.log(CLASS_NAME, 'all of the requested stories loaded successfully');
            this._dispatcher.dispatch(new StoriesLoadedActionPayload(storiesJSON));
        }).catch((error) => {
            console.log(CLASS_NAME, 'failed to load the story:', failedStoryId);
            this._dispatcher.dispatch(new ErrorOccurredActionPayload(error));
        });
    }

    /**
     * Receives an array of stories and loads all the comments submitted for
     * them.
     * 
     * @param {Story[]} stories 
     * @memberof StoryActionManager
     */
    loadComments(stories) {

        let ids = this._extractCommentIdsFromItems(stories);
        let comments = [];

        this._logTotalCommentCount(stories);

        this._internalLoadComments(ids, comments);
    }

    /**
     * Recursively loads all of the comments for the specified item ids
     * After loading, dispatches an action to the store
     * 
     * @param {any} ids 
     * @param {any} comments 
     * @memberof StoryActionManager
     */
    _internalLoadComments(ids, comments) {
        let promises = []; // An array that keeps all the promises of loading comments on each level in the hierarchy
        let loadedComments = []; // Array of comments which will be loaded

        for(let id of ids) {
            // Loading each comment
            promises.push(this._loadItem(id).then((itemJSON) => {
                if(itemJSON.type === ItemTypes.COMMENT) {
                    let comment = new Comment(itemJSON);
                    loadedComments.push(comment);
                }
            }));
        }

        // Does not tolerate errors, fails with the first error 
        // TODO: This could be changed so that we can tolerate some comment loading failures
        Promise.all(promises).then(() => {
            let loadedCommentIds = this._extractCommentIdsFromItems(loadedComments);
            Array.prototype.push.apply(comments, loadedComments);
            if(loadedCommentIds.length > 0) {
                this._internalLoadComments(loadedCommentIds, comments);
            } else {
                console.log(CLASS_NAME, 'all comments loaded');
                console.log(CLASS_NAME, 'loaded comments count:', comments.length);
                this._dispatcher.dispatch(new CommentsLoadedActionPayload(comments));
            }
        }).catch((error) => {
            console.log(CLASS_NAME, 'failed to load all the comments');
            this._dispatcher.dispatch(new ErrorOccurredActionPayload(error));
        });
    }

    _extractCommentIdsFromItems(items) {
        let ids = [];

        for(let item of items) {
            Array.prototype.push.apply(ids, item.getCommentIds());
        }

        return ids;
    }

    _logTotalCommentCount(stories) {
        let totalCount = 0;

        for(let story of stories) {
            totalCount += story.getCommentsCount();        ;
        }

        console.log(CLASS_NAME, 'total comments:', totalCount);
    }

    /**
     * Loads one individual story
     * 
     * @param {number} id 
     * @returns 
     * @memberof StoryActionManager
     */
    _loadItem(id) {
        //console.log(CLASS_NAME, 'loading item:', id);

        return new Promise((resolve, reject) => {
            Comm.executeCall(new GetItemCall(id)).then((itemJSON) => {
                //console.log(CLASS_NAME, 'loaded successfully. Item:', id);
                resolve(itemJSON);
            }).catch((error) => {
                console.error(CLASS_NAME, error);
                reject(error);
            })
        });
    }
}

export default StoryActionManager;