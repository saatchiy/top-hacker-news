import ServerCallBase from 'core/dataretriever/calls/ServerCallBase';
import * as RequestTypes from 'core/dataretriever/calls/RequestTypes';

const OBJECT_NAME = 'item/';

/**
 * Implements the call object for making requests to get an item
 * including comments and stories.
 * 
 * Creates the relative part of the url.
 * 
 * @class GetItemCall
 * @extends {ServerCallBase}
 */
class GetItemCall extends ServerCallBase {
    constructor(itemId) {
        let reqUrl = OBJECT_NAME + itemId + '.json';
        super(RequestTypes.GET, reqUrl);
    }
}

export default GetItemCall;