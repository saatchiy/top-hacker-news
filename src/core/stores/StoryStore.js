import {EventEmitter} from 'events';
import * as ActionTypes from 'core/dataretriever/actions/ActionTypes';
import * as ChangeConstants from 'core/stores/ChangeConstants';
import Story from 'core/data/Story';

const NUMBER_OF_TOP_STORIES = 30;
const CLASS_NAME = 'StoreStore:';

class StoryStore extends EventEmitter {
    
    constructor(dispatcher, storyActionManager) {
        super();
        this._dispatchToken = dispatcher.register(this._handleActions.bind(this));
        this._topIDs = [];
        this._stories = new Map();
        this._storyActionManager = storyActionManager;
    }

    getStoreDispatchToken() {
        return this._dispatchToken;
    }

    _handleActions(payload) {
        switch(payload.getActionType()) {
            case ActionTypes.GET_TOP_STORIES:
                this._logAction(payload);
                this._loadTopStoryIDs(payload);
                break;
            case ActionTypes.TOP_STORY_IDS_LOADED:
                this._logAction(payload);
                this._handleTopStoryIDsLoaded(payload);
                break;
            case ActionTypes.STORIES_LOADED:
                this._logAction(payload);
                this._handleStoriesLoaded(payload);
                break;
        }
    }

    _logAction(payload) {
        console.log(CLASS_NAME, 'action received:', payload.getActionType())
    }

    _flush() {
        this._topIDs = [];
        this._stories = new Map();
    }

    _loadTopStoryIDs(payload) {
        console.log(CLASS_NAME, 'loading top story ids.')
        this._storyActionManager.loadTopStoryIDs(NUMBER_OF_TOP_STORIES);
    }

    /**
     * Receives top story ids and loads each story
     * 
     * @param {TopStoryIDsLoadedActionPayload} payload 
     * @memberof StoryStore
     */
    _handleTopStoryIDsLoaded(payload) {
        console.log(CLASS_NAME, 'loading top stories');

        // flushing old data before loading new stories
        this._flush();

        this.topIDs = payload.getIDsJSON();
        this._storyActionManager.loadStories(this.topIDs.slice(0, NUMBER_OF_TOP_STORIES));
    }

    _handleStoriesLoaded(payload) {
        let storiesJSON = payload.getStoriesJSON();
        
        // Create Story objects and add them to the map
        for(let storyJSON of storiesJSON) {
            this._stories.set(storyJSON.id, new Story(storyJSON));
        }

        console.log(CLASS_NAME, 'emitting to containers: top stories loaded');
        this._emitTopStoriesLoaded();
    }

    getTopStories() {
        return Array.from(this._stories.values());
    }

    getNumberOfTopStories() {
        return NUMBER_OF_TOP_STORIES;
    }

    _emitTopStoriesLoaded() {
        this.emit(ChangeConstants.STORIES_LOADED);
    }

}

export default StoryStore;