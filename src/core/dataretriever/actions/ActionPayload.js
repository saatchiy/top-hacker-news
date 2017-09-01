
export var ActionTypeEnum = {
    GET_TOP_STORIES: 1,
    GET_ITEM: 2,
    GET_USER: 3
}


class ActionPayload {
    constructor(actionType) {
        this._actionType = actionType;
    }

    getActionType() {
        return this._actionType;
    }
}

export default ActionPayload;