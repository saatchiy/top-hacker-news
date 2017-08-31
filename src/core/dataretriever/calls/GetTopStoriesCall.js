import ServerCallBase from 'core/dataretriever/calls/ServerCallBase';
import {RequestTypeEnum} from 'core/dataretriever/calls/ServerCallBase';

class GetTopStoriesCall extends ServerCallBase {
    constructor() {
        let reqUrl = 'topstories.json';
        super(RequestTypeEnum.GET, reqUrl);
    }
}
