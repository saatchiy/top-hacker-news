import StoryStore from 'core/stores/StoryStore';
import GUIStore from 'core/stores/GUIStore';

class Stores {
    constructor(dispatcher, actionManagers) {
        this._storyStore = new StoryStore(dispatcher, actionManagers.getStoryActionManager(), this);
        this._guiStore = new GUIStore(dispatcher, this);
    }

    getStoryStore() {
        return this._storyStore;
    }

    getGUIStore() {
        return this._guiStore;
    }
}

export default Stores;