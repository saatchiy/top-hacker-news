import * as ActionTypes from 'core/dataretriever/actions/ActionTypes';
import ActionPayload from 'core/dataretriever/actions/ActionPayload';


class TopStoryIDsLoadedActionPayload extends ActionPayload {
    constructor(idsJSON) {
        super(ActionTypes.TOP_STORY_IDS_LOADED);

        this._idsJSON = idsJSON;
    }

    /**
     * Gets a json object that holds the array of top story ids
     * 
     * @returns a json object containing the ids
     * @memberof TopStoryIDsLoadedActionPayload
     */
    getIDsJSON() {
        return this._idsJSON;
    }
}

export default TopStoryIDsLoadedActionPayload;