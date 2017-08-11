'use strict';

import events from '../constants/events';

function addQuote(items, item) {
    return items.concat(item);
}

function updateQuote(items, item) {
	return items.map(v => {
		if (v.id === item.id) return item;
		return v;
	});
}

function getQuotes(items, action) {
	switch (action.type) {
		case events.ADD_QUOTE:
			return addQuote(items, action.data);

		case events.UPDATE_QUOTE:
			return updateQuote(items, action.data);
	}

	return items;
}

export default function offerApp(state = {items: []}, action) {
    return {
        items: getQuotes(state.items, action)
    };   
}