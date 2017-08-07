'use strict';

import { createStore } from 'redux';
import quotesApp from '../reducers/quotesReducers';

let store = createStore(quotesApp);

export default store;