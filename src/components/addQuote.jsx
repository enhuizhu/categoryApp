'use strict';

import React from 'react';
import status from '../constants/status';

class AddQuote extends React.Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        
        this.state = {
            quoteName: this.getQuoteName(),
            quotePrice: this.getQuotePrice()
        };
        
        this.quoteNameChange = this.quoteNameChange.bind(this);
        this.quotePriceChange = this.quotePriceChange.bind(this);
    }

    getQuotePrice() {
        return this.isEditing() ? this.props.items[this.props.editIndex].price : '';
    }

    getQuoteName() {
        return this.isEditing() ? this.props.items[this.props.editIndex].name : this.props.items[0].name;
    }

    quoteNameChange(e) {
        this.state.quoteName = e.target.value;
    }

    quotePriceChange(e) {
        this.state.quotePrice = e.target.value;
    }

    add() {
        this.props.callback(this.state);
    }

    isEditing() {
        return this.props.editIndex !== null && this.props.statu === status.EDIT;
    }

    render() {
        const quotes = this.props.items.map((v, i) => {
            if (this.isEditing() && i === this.props.editIndex) {
                return <option value={v} key={i} selected>{v}</option>;
            }
            
            return <option value={v} key={i}>{v}</option>;
        });

        return (
            <div id="myModal" className="modal fade" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div className="modal-body">
                        <form>
                            <div className='form-group'>
                                <label>Name</label>
                                
                                <select name='quoteName' onChange={(e) => {this.quoteNameChange(e);}}>
                                    {quotes}
                                </select>
                            </div>
                            <div>
                                <label>Price</label>
                                <input type='number' className='form-control' placeholder='quote price' onChange={(e)=> {this.quotePriceChange(e);}} ref={(c) => {this.quotePrice = c;}}/>
                            </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type='button' className='btn btn-primary' data-dismiss='modal' onClick={this.add}>Add</button>
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
            </div>
        );
    }
}

AddQuote.propTypes = {
    callback: React.PropTypes.func,
    items: React.PropTypes.array
};

AddQuote.defaultProps = {
    callback: function() {},
    items: []
};

export default AddQuote;

