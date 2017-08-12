import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers/index';
import App from './components/app';
import CategoryDetail from './components/categoryDetail/categoryDetail';
import dataService from './services/dataService';
import events from './constants/events';
import { Switch, Route, HashRouter} from 'react-router-dom';

const store = createStore(allReducers, applyMiddleware(dataService));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter hashType='slash'>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/:category' component={CategoryDetail}/>
                <Route path='*' component={CategoryDetail}/>
            </Switch>
        </HashRouter>
    </Provider>, 
    document.getElementById('app'));

store.dispatch({
    type: events.GET_CATEGORIES_DATA
});