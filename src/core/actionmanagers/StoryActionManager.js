import comm from 'core/dataretriever/ServerCommunicator';
import GetTopStoriesCall from 'core/dataretriever/calls/GetTopStoriesCall';
import GetItemCall from 'core/dataretriever/calls/GetItemCall';

import TopStoryIDsLoadedActionPayload from 'core/dataretriever/actions/reactions/TopStoryIDsLoadedActionPayload';
import ErrorOccurredActionPayload from 'core/dataretriever/actions/reactions/ErrorOccurredActionPayload';
import StoriesLoadedActionPayload from 'core/dataretriever/actions/reactions/StoriesLoadedActionPayload';

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
        comm.executeCall(new GetTopStoriesCall()).then((topStoriesJSON) => {
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
                this._loadStory(id).then((storyJSON) => {
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
            this._dispatcher.dispatch(new ErrorOccurredActionPayload(error))
        })
    }

    /**
     * Loads one individual story
     * 
     * @param {number} id 
     * @returns 
     * @memberof StoryActionManager
     */
    _loadStory(id) {
        console.log(CLASS_NAME, 'loading story:', id);

        return new Promise((resolve, reject) => {
            comm.executeCall(new GetItemCall(id)).then((storyJSON) => {
                console.log(CLASS_NAME, 'loaded successfully. story:', id);
                resolve(storyJSON);
            }).catch((error) => {
                console.error(CLASS_NAME, error);
                reject(error);
            })
        });
    }
}

export default StoryActionManager;