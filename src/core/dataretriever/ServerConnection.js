import {RequestTypeEnum} from 'core/dataretriever/calls/ServerCallBase';

class ServerConnection {
    constructor() {

    }

    executeCall(restCall) {
        switch(restCall.getRequestType()) {
            case RequestTypeEnum.GET:
                this.sendGetRequest(restCall);
        }
    }

    sendGetRequest(restCall) {

    }
}

export default ServerConnection;