'use strict';
import request from 'superagent'
import events from '../constants/events';
import {addCategories} from '../actions/index';

const dataService = store => next => action => {
    /*
    * Pass all actions through by default
    */
    next(action);

    switch (action.type) {
        case events.GET_CATEGORIES_DATA:
            request
                .get('/data/categories.json')
                .end((err, res) => {
                    console.log(err, res);
                    
                    if (err) {
                        console.error(err);
                        return ;
                    }

                    const data = res.body.buttons;

                    next(addCategories(data));
                })
            break;
        default:
            break;
    };
};

export default dataService