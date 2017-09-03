import * as ActionTypes from 'core/dataretriever/actions/ActionTypes';
import ActionPayload from 'core/dataretriever/actions/ActionPayload';


class CommentsLoadedActionPayload extends ActionPayload {
    constructor(comments) {
        super(ActionTypes.COMMENTS_LOADED);

        this._comments = comments;
    }

    /**
     * Gets an array that holds all the loaded comments of top stories
     * 
     * @returns an array of all the loaded comments
     * @memberof CommentsLoadedActionPayload
     */
    getComments() {
        return this._comments;
    }
}

export default CommentsLoadedActionPayload;