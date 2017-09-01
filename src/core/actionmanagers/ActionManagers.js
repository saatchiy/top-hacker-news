import StoryActionManager from 'core/actionmanagers/StoryActionManager';


class ActionManagers {
    constructor(dispatcher) {
        this._storyActionManager = new StoryActionManager(dispatcher);
    }

    getStoryActionManager() {
        return this._storyActionManager;
    }
}

export default ActionManagers;