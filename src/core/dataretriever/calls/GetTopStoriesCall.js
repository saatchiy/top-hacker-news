import ServerCallBase from 'core/dataretriever/calls/ServerCallBase';
import * as RequestTypes from 'core/dataretriever/calls/RequestTypes';

class GetTopStoriesCall extends ServerCallBase {
    constructor() {
        let reqUrl = 'topstories.json';
        super(RequestTypes.GET, reqUrl);
    }
}

export default GetTopStoriesCall;