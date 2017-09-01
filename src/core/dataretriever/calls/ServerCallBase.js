
const BASE_URL = encodeURI('https://hacker-news.firebaseio.com');
const API_VERSION = 'v0';


class ServerCallBase {

    constructor(requestType, relativeURL) {
        this._requestType = requestType;
        this._requestURL = BASE_URL + '/' + API_VERSION + '/' + relativeURL;
    }

    getRequestType() {
        return this._requestType;
    }

    getRequestURL() {
        return this._requestURL;
    }
}

export default ServerCallBase;