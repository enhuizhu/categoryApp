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
        console.log('status', status);
        this.state = {
            quotes: [],
            appStatus: status.NORMAL,
            editIndex: null
        };
        
        this.data = {
            items: ['Tequila', 'Salt', 'Lemon', 'Bartender']
        };

        this.addQuote = this.addQuote.bind(this);
        this.updateAppStatus = this.updateAppStatus.bind(this);
        this.edit = this.edit.bind(this);
    }

    edit(index) {
        console.log('edit index:', index);
        this.setState({editIndex: index});
        jQuery('#myModal').modal('show');
    }

    componentDidMount() {
        this.listener = store.subscribe(this.onChangeState.bind(this));        
    }

    updateAppStatus() {
        this.setState({appStatus: this.state.appStatus === status.NORMAL ? status.EDIT : status.NORMAL});
        console.log('new state in updateAppStatus', this.state);
    } 

    onChangeState() {
         this.quotesStore = store.getState();
         this.setState({quotes: this.quotesStore.items});
    }

    addQuote(obj) {
        quotesActions.addQuote({name: obj.quoteName, price: obj.quotePrice});
    }

    render() {
        return <div className='container'>
            <button data-toggle="modal" data-target="#myModal" className="btn btn-primary">Add Item</button>
            <Quotes items={this.state.quotes} statu={this.state.appStatus} changeStatus={this.updateAppStatus} edit={this.edit}></Quotes>
            <AddQuote items={this.data.items} callback={this.addQuote} statu={this.state.statu} editIndex={this.state.editIndex}></AddQuote>
        </div>;
    }
}


ReactDom.render(<App/>, document.getElementById('app'));