import {EventEmitter} from 'events';
import * as ActionTypes from 'core/dataretriever/actions/ActionTypes';

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
        }
    }

    _logAction(payload) {
        console.log('StoryStore:', 'action received:', payload.getActionType())
    }

    _loadTopStoryIDs(payload) {
        this._storyActionManager.loadTopStoryIDs(payload.getNumberOfStories());
    }

    /**
     * Receives top story ids and loads each story
     * 
     * @param {TopStoryIDsLoadedActionPayload} payload 
     * @memberof StoryStore
     */
    _handleTopStoryIDsLoaded(payload) {
        this.topIDs = payload.getIDsJSON();
        
    }

}

export default StoryStore;