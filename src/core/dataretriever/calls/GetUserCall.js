import ServerCallBase from 'core/dataretriever/calls/ServerCallBase';
import * as RequestTypes from 'core/dataretriever/calls/RequestTypes';

const OBJECT_NAME = 'user/';

/**
 * Implements the call object for making requests to get a user
 * 
 * Creates the relative part of the url.
 * 
 * @class GetUerCall
 * @extends {ServerCallBase}
 */
class GetUerCall extends ServerCallBase {
    constructor(userId) {
        let reqUrl = OBJECT_NAME + userId + '.json';
        super(RequestTypes.GET, reqUrl);
    }
}

export default GetUerCall;