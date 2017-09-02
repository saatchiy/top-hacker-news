import comm from 'core/dataretriever/ServerCommunicator';
import GetTopStoriesCall from 'core/dataretriever/calls/GetTopStoriesCall';
import TopStoryIDsLoadedActionPayload from 'core/dataretriever/actions/reactions/TopStoryIDsLoadedActionPayload'
import ErrorOccurredActionPayload from 'core/dataretriever/actions/reactions/ErrorOccurredActionPayload'


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
            console.log('Top stories ids loaded successfully.');
            this._dispatcher.dispatch(new TopStoryIDsLoadedActionPayload(topStoriesJSON));
        }).catch((error) => {
            console.log(error);
            this._dispatcher.dispatch(new ErrorOccurredActionPayload(error));
        });
    }
}

export default StoryActionManager;