import Comm from 'core/dataretriever/ServerCommunicator';
import GetTopStoriesCall from 'core/dataretriever/calls/GetTopStoriesCall';
import GetItemCall from 'core/dataretriever/calls/GetItemCall';

import TopStoryIDsLoadedActionPayload from 'core/dataretriever/actions/reactions/TopStoryIDsLoadedActionPayload';
import ErrorOccurredActionPayload from 'core/dataretriever/actions/reactions/ErrorOccurredActionPayload';
import StoriesLoadedActionPayload from 'core/dataretriever/actions/reactions/StoriesLoadedActionPayload';
import CommentsLoadedActionPayload from 'core/dataretriever/actions/reactions/CommentsLoadedActionPayload';

import Comment from 'core/data/Comment';

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
        let promises = [] // An array that keeps all the promises of loading comments
        let comments = [] // An array that holds all the created comment objects

        let story = null;
        for(let stry of stories) {
            if(stry.getCommentsCount() > 90) {
                story = stry;
                break;
            }
        }
        this._internalLoadComments([story], promises, comments);

        Promise.all(promises).then(() => {
            console.log(CLASS_NAME, 'comments loaded');
            console.log(CLASS_NAME, 'loaded comments count:', comments.length);
            this._dispatcher.dispatch(new CommentsLoadedActionPayload(comments));
        }).catch((error) => {
            console.log(CLASS_NAME, 'failed to load all the comments');
            this._dispatcher.dispatch(new ErrorOccurredActionPayload(error));
        });
    }

    _internalLoadComments(items, promises, comments) {
        for(let item of items) {
            // getting ids of each comment
            let ids = item.getCommentsIds();
            for(let id of ids) {
                // Loading each comment
                promises.push(this._loadItem(id).then((commentJSON) => {
                    let comment = new Comment(commentJSON);
                    comments.push(comment);
                    this._internalLoadComments([comment], promises, comments);
                }));
            }
        }
    }

    /**
     * Loads one individual story
     * 
     * @param {number} id 
     * @returns 
     * @memberof StoryActionManager
     */
    _loadItem(id) {
        console.log(CLASS_NAME, 'loading item:', id);

        return new Promise((resolve, reject) => {
            Comm.executeCall(new GetItemCall(id)).then((itemJSON) => {
                console.log(CLASS_NAME, 'loaded successfully. Item:', id);
                resolve(itemJSON);
            }).catch((error) => {
                console.error(CLASS_NAME, error);
                reject(error);
            })
        });
    }

    waitForAllPromises() {

    }
}

export default StoryActionManager;