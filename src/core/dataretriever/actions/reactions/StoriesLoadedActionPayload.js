import * as ActionTypes from 'core/dataretriever/actions/ActionTypes';
import ActionPayload from 'core/dataretriever/actions/ActionPayload';


class StoryLoadedActionPayload extends ActionPayload {
    constructor(storiesJSON) {
        super(ActionTypes.STORIES_LOADED);

        this._storiesJSON = storiesJSON;
    }

    /**
     * Gets an array of json objects each containing a story
     * that has been loaded from the server
     * 
     * @returns an array of json objects containing stories
     * @memberof StoryLoadedActionPayload
     */
    getStoriesJSON() {
        return this._storiesJSON;
    }
}

export default StoryLoadedActionPayload;