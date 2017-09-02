import ServerCallBase from 'core/dataretriever/calls/ServerCallBase';
import * as RequestTypes from 'core/dataretriever/calls/RequestTypes';


/**
 * Implements the call object for making requests to get top story ids
 * Creates the relative part of the url.
 * 
 * @class GetTopStoriesCall
 * @extends {ServerCallBase}
 */
class GetTopStoriesCall extends ServerCallBase {
    constructor() {
        let reqUrl = 'topstories.json';
        super(RequestTypes.GET, reqUrl);
    }
}

export default GetTopStoriesCall;