import * as RequestTypes from 'core/dataretriever/calls/RequestTypes';
import {ajax} from 'jquery';

class ServerCommunicator {
    
    static executeCall(restCall) {
        return new Promise((resolve, reject) => {
            switch(restCall.getRequestType()) {
                case RequestTypeEnum.GET:
                    this._sendGetRequest(restCall, resolve, reject);
            }
        });
    }

    static _sendGetRequest(restCall, resolve, reject) {

        let success = (data) => {
            resolve(data);
        };

        let error = (jqXhr, textStatus, errorThrown) => {
            reject(new Error('Failed to get the response from the server.'));
        };

        ajax({
            url: restCall.getRequestURL(),
            type: restCall.getRequestType(),
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            cache: false,
            success: success,
            error: error

        });
    }
}

export default ServerCommunicator;