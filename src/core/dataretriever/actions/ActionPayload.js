
export var ActionTypeEnum = {
    GET_TOP_STORIES: 1,
    GET_ITEM: 2,
    GET_USER: 3
}


class ActionPayload {
    constructor(actionType) {
        this.actionType = actionType;
    }

    getActionType() {
        return this.actionType;
    }
}

export default ActionPayload;