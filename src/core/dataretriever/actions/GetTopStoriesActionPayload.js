import {ActionTypeEnum} from 'core/dataretriever/actions/ActionPayload';
import ActionPayload from 'core/dataretriever/actions/ActionPayload';

const NUMBER_OF_TOP_STORIES = 30;

class GetTopStoriesActionPayload extends ActionPayload {
    constructor() {
        super(ActionTypeEnum.GET_TOP_STORIES);

        this.numberOfStories = NUMBER_OF_TOP_STORIES;
    }

    getNumberOfStories() {
        return this.numberOfStories;
    }
}

export default GetTopStoriesActionPayload;