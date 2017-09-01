import * as ActionTypes from 'core/dataretriever/actions/ActionTypes';
import ActionPayload from 'core/dataretriever/actions/ActionPayload';

const NUMBER_OF_TOP_STORIES = 30;

class GetTopStoriesActionPayload extends ActionPayload {
    constructor() {
        super(ActionTypes.GET_TOP_STORIES);

        this._numberOfStories = NUMBER_OF_TOP_STORIES;
    }

    getNumberOfStories() {
        return this._numberOfStories;
    }
}

export default GetTopStoriesActionPayload;