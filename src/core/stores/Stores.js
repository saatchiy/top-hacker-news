import StoryStore from 'core/stores/StoryStore';

class Stores {
    constructor(dispatcher, actionManagers) {
        this._storyStore = new StoryStore(dispatcher, actionManagers.getStoryActionManager());
    }

    getStoryStore() {
        return this._storyStore;
    }
}

export default Stores;