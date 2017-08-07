'use strict';

import events from '../constants/events';

function addQuote(items, action) {
    return action.type === events.ADD_QUOTE ? items.concat(action.data) : items;
}

export default function offerApp(state = {items: []}, action) {
    return {
        items: addQuote(state.items, action),
    };   
}