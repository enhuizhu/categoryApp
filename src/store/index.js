'use strict';

import { createStore } from 'redux';
import categoryApp from '../reducers/index';

let store = createStore(categoryApp);

export default store;