'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import quotesActions from './actions/quotesActions';
import AddQuote from './components/addQuote.jsx';
import Quotes from './components/quotes.jsx';
import store from './store/quotesStore';
import status from './constants/status';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            appStatus: status.NORMAL,
            editItem: null
        };
        
        this.data = {
            items: ['Tequila', 'Salt', 'Lemon', 'Bartender']
        };

        this.addQuote = this.addQuote.bind(this);
        this.updateAppStatus = this.updateAppStatus.bind(this);
        this.edit = this.edit.bind(this);
    }

    edit(index) {
        this.setState({editItem: this.state.quotes[index]});
        jQuery('#myModal').modal('show');
    }

    componentDidMount() {
        this.listener = store.subscribe(this.onChangeState.bind(this));        
    }

    updateAppStatus(statu, popup = true) {
        if (statu === status.NORMAL && popup) {
            jQuery('#myModal').modal('show');
        }

        this.setState({appStatus: statu});
    } 

    onChangeState() {
         this.quotesStore = store.getState();
         this.setState({quotes: this.quotesStore.items});
    }

    addQuote(obj) {
        jQuery('#myModal').modal('hide');
        
        let newObj = {
            name: obj.quoteName,
            price: obj.quotePrice,
            id: obj.id
        }
        
        if (this.state.appStatus === status.EDIT) {
            quotesActions.updateQuote(newObj);
        } else {
            quotesActions.addQuote(newObj);
        }        
    }

    render() {
        return <div className='container'>            
            <Quotes items={this.state.quotes} statu={this.state.appStatus} changeStatus={this.updateAppStatus} edit={this.edit}></Quotes>
            <AddQuote items={this.data.items} callback={this.addQuote} statu={this.state.appStatus} editItem={this.state.editItem}></AddQuote>
        </div>;
    }
}


ReactDom.render(<App/>, document.getElementById('app'));