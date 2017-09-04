import {EventEmitter} from 'events';
import * as ActionTypes from 'core/dataretriever/actions/ActionTypes';
import * as ChangeConstants from 'core/stores/ChangeConstants';


const CLASS_NAME = 'GUIStore:';

class GUIStore extends EventEmitter {
    constructor(dispatcher, stores) {
        super();
        this._dispatcher = dispatcher;
        this._stores = stores;
        this._dispatchToken = dispatcher.register(this._handleActions.bind(this));
        this._storiesLoading = false;
        this._commentersLoading = false;
    }

    getStoreDispatchToken() {
        return this._dispatchToken;
    }

    _handleActions(payload) {
        let storyDispatchToken = this._stores.getStoryStore().getStoreDispatchToken();

        switch(payload.getActionType()) {
            case ActionTypes.GET_TOP_STORIES:
                this._logAction(payload);
                this._handleTopStoriesLoading();
                break;
            case ActionTypes.STORIES_LOADED:
                this._dispatcher.waitFor([storyDispatchToken]);
                this._logAction(payload);
                this._handleStoriesLoaded();
                break;
            case ActionTypes.COMMENTS_LOADED:
                this._dispatcher.waitFor([storyDispatchToken]);
                this._logAction(payload);
                this._handleCommentsLoaded();
                break;
        }
    }

    _logAction(payload) {
        console.log(CLASS_NAME, 'action received:', payload.getActionType())
    }

    _handleTopStoriesLoading() {
        this._storiesLoading = true;
        this._commentersLoading = true;
        this._emitViewStateChanged();
    }

    _handleCommentsLoaded() {
        this._commentersLoading = false;
        this._emitViewStateChanged();
    }

    _handleStoriesLoaded() {
        this._storiesLoading = false;
        this._emitViewStateChanged();
    }

    _emitViewStateChanged() {
        this.emit(ChangeConstants.VIEW_STATE_CHANGED);
    }

    isStoriesLoading() {
        return this._storiesLoading;
    }

    isCommentersLoading() {
        return this._commentersLoading;
    }

}

export default GUIStore;