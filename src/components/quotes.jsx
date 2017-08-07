'use strict';

import React from 'react';
import Quote from './quote.jsx';
import status from '../constants/status';

class Quotes extends React.Component {
    constructor(props) {
        super(props);
    }

    format(price) {
        return "&pound;" + price.toFixed(2);
    }

    render() {         
         let totalPrice = 0;

         const items = this.props.items.map((v, i) => {
            let price = parseFloat(v.price);
            totalPrice += price;
            return <Quote key={i} name={v.name} price={this.format(price)} statu={this.props.statu} edit={() => {
                this.props.edit(i);
            }}/>
         });

         let vat = totalPrice * this.props.vat;
         let totalPriceIncVat = totalPrice + vat;
         
         return (
            <div className='quotes-container'>
                <div className='quotes-header'>
                   <label>Quotes details</label>
                   <a href='javascript:void(0)' className='amend-quote' onClick={() => {this.props.changeStatus(this.props.statu === status.EDIT ? status.NORMAL : status.EDIT, false)}}>Amend quote</a>
                   <a href='javascript:void(0)' data-toggle="modal" className='add-quote' onClick={() => {this.props.changeStatus(status.NORMAL)}}>Add Item</a>
                   <div className="clearfix"></div>
                </div>

                <div className='list'>
                    {items}
                </div>
                
                <div className='total'>
                    <label>Total quotes (excl. VAT)</label>
                    <div className='number' dangerouslySetInnerHTML={{__html: this.format(totalPrice)}}>
                    </div>
                   <div className="clearfix"></div>
                </div>
                
                <div className='total'>
                    <label>VAT</label>
                    <div className='number' dangerouslySetInnerHTML={{__html: this.format(vat)}}>
                    </div>
                   <div className="clearfix"></div>
                </div>

                <div className='total'>
                    <label>Total quotes (inc. VAT)</label>
                    <div className='number' dangerouslySetInnerHTML={{__html: this.format(totalPriceIncVat)}}>
                    </div>
                   <div className="clearfix"></div>
                </div>
            </div>
         );   
    }
}


Quotes.propTypes = {
    items: React.PropTypes.array,
    vat: React.PropTypes.number
};

Quotes.defaultProps = {
    items: [],
    vat: 0.2
};

export default Quotes;
