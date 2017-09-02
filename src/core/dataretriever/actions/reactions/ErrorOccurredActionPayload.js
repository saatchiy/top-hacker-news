import * as ActionTypes from 'core/dataretriever/actions/ActionTypes';
import ActionPayload from 'core/dataretriever/actions/ActionPayload';


/**
 * Implementation of a class to inform stores about the occurrence of an error
 * 
 * @class ErrorOccurredActionPayload
 * @extends {ActionPayload}
 */
class ErrorOccurredActionPayload extends ActionPayload {
    constructor(error) {
        super(ActionTypes.ERROR_OCCURRED);

        this._error = error;
    }

    getError() {
        return this._error;
    }
}

export default ErrorOccurredActionPayload;