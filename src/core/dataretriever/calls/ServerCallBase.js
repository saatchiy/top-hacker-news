
const BASE_URL = 'https://hacker-news.firebaseio.com';
const API_VERSION = 'v0';

export var RequestTypeEnum = {
    GET: 1,
    PUT: 2,
    POST: 3
}

class ServerCallBase {

    constructor(requestType, relativeURL) {
        this.requestType = requestType;
        this.relativeURL = relativeURL;
        this.requestURL = BASE_URL + '/' + API_VERSION + '/' + this.relativeURL;
    }

    getRequestType() {
        return this.requestType;
    }

    getRequestURL() {
        return this.requestURL;
    }
}

export default ServerCallBase;