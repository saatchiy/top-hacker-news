'use strict';
import {Dispatcher} from 'flux';
import Stores from 'core/stores/Stores';
import ActionManagers from 'core/dataretriever/actionmanagers/ActionManagers';


class App {
    constructor() {
        this._initApp();
    }

    _initApp() {
        this._dispatcher = new Dispatcher();
        let actionManagers = new ActionManagers(this._dispatcher);
        this._stores = new Stores(this._dispatcher, actionManagers);
    }

    getDispatcher() {
        return this._dispatcher;
    }

    getStores() {
        return this._stores;
    }
}

export default App;