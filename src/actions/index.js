'use strict';

import store from '../store/quotesStore';
import events from '../constants/events';

class QuotesAction {
    static addQuote(item) {
        store.dispatch({
            type: events.ADD_QUOTE,
            data: item
        });
    }

    static updateQuote(item) {
    	store.dispatch({
    		type: events.UPDATE_QUOTE,
    		data: item
    	})
    }
}

export default QuotesAction;