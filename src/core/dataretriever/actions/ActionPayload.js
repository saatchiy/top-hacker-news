
/**
 * Implements a base class for different actions
 * This class contains the action type to prevent the sub classes
 * from dealing with action types.
 * 
 * @class ActionPayload
 */
class ActionPayload {
    constructor(actionType) {
        this._actionType = actionType;
    }

    getActionType() {
        return this._actionType;
    }
}

export default ActionPayload;