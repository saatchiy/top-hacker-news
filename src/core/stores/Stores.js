import StoryStore from 'core/stores/StoryStore';

class Stores {
    constructor() {
        this._initStores();
    }

    _initStores() {
        this._storyStore = new StoryStore();
    }

    getStoryStore() {
        return this._storyStore;
    }
}

export default Stores;