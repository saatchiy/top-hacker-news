import {EventEmitter} from 'events';
import * as ActionTypes from 'core/dataretriever/actions/ActionTypes';

class StoryStore extends EventEmitter {
    
    constructor(dispatcher, storyActionManager) {
        super();
        this._initStore(dispatcher);
        this._stories = new Map();
        this._storyActionManager = storyActionManager;
    }

    _initStore(dispatcher) {
        dispatcher.register(this._handleActions.bind(this));
    }

    _handleActions(payload) {
        switch(payload.getActionType()) {
            case ActionTypes.GET_TOP_STORIES:
                this._logAction(payload);
                this._loadTopStories(payload);
                break;
        }
    }

    _logAction(payload) {
        console.log('StoryStore:', 'action received:', payload.getActionType())
    }

    _loadTopStories(payload) {
        this._storyActionManager.loadTopStories(payload.getNumberOfStories());
    }

}

export default StoryStore;