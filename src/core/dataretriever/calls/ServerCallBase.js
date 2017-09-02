
const BASE_URL = encodeURI('https://hacker-news.firebaseio.com');
const API_VERSION = 'v0';

const CLASS_NAME = 'ServerCallBase:'

/**
 * A base class for creating call objects. Creates the full url of
 * the rest api request.
 * 
 * @class ServerCallBase
 */
class ServerCallBase {

    constructor(requestType, relativeURL) {
        this._requestType = requestType;
        this._requestURL = BASE_URL + '/' + API_VERSION + '/' + relativeURL;
        console.log(CLASS_NAME, 'request url:', this._requestURL);
    }

    getRequestType() {
        return this._requestType;
    }

    getRequestURL() {
        return this._requestURL;
    }
}

export default ServerCallBase;