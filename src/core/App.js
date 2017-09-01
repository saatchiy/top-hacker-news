'use strict';
import {Dispatcher} from 'flux';
import Stores from 'core/stores/Stores';

class App {
    constructor() {
        this._initApp();
    }

    _initApp() {
        this._dispatcher = new Dispatcher();
        this._stores = new Stores();
    }

    getDispatcher() {
        return this._dispatcher;
    }

    getStores() {
        return this._stores;
    }
}

export default App;