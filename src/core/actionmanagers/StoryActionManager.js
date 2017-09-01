import GetTopStoriesCall from 'core/dataretriever/calls/GetTopStoriesCall';
import comm from 'core/dataretriever/ServerCommunicator';


class StoryActionManager {
    constructor(dispatcher) {
        this._dispatcher = dispatcher;
    }

    loadTopStories(numberOfStories) {
        comm.executeCall(new GetTopStoriesCall()).then((topStoriesJSON) => {
            console.log(topStoriesJSON);
        }).catch((error) => {
            console.log(error);
        });
    }
}

export default StoryActionManager;