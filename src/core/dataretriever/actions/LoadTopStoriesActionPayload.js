import * as ActionTypes from 'core/dataretriever/actions/ActionTypes';
import ActionPayload from 'core/dataretriever/actions/ActionPayload';


class LoadTopStoriesActionPayload extends ActionPayload {
    constructor() {
        super(ActionTypes.GET_TOP_STORIES);
    }
}

export default LoadTopStoriesActionPayload;