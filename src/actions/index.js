'use strict';

import events from '../constants/events';

export function selectCategory(catetory) {
    console.log('selectCategory', catetory);
    return {
        type: events.SELECT_CATETORY,
        data: catetory
    };
}

export function addCategories(categories) {
    console.log('new categories coming', categories);
    return {
        type: events.ADD_CATEGORIES,
        data: categories
    };
}
