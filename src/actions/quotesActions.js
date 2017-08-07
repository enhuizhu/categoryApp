'use strict';

import store from '../store/quotesStore';
import events from '../constants/events';

class QuotesAction {
    static addQuote(item) {
        console.log('item', item);
        store.dispatch({
            type: events.ADD_QUOTE,
            data: item
        });
    }
}

export default QuotesAction;