'use strict';

import events from '../constants/events';

const defaultCategories = [];

function setCategories(categories, action) {
	console.log('action', action);
	if (action.type === events.ADD_CATEGORIES) {
		return categories.concat(action.data);
	}

	return categories;
}

function setStatus(statu, action) {
	if (action.type === events.STATUS_CHANGED) {
		return action.statu;
	}

	return statu;
}

export default function offerApp(state = {categories: defaultCategories, statu: 'feached'}, action) {
    return {
        categories: setCategories(state.categories, action),
        statu: setStatus(state.statu, action)
    };   
}