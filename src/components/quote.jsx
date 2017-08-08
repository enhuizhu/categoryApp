'use strict';

import React from 'react';
import status from '../constants/status';

const Quote = ({name, price, statu, edit}) => {
    const editBtn = statu === status.EDIT ? <a href='javascript:void(0)' className='edit-btn' onClick={edit}>Edit</a> : null; 
    
    return (
        <div className='item-wrapper'>
            <div className='item-name'>{name}</div>
            {editBtn}
            <div className='item-price number' dangerouslySetInnerHTML={{__html: price}}></div>
            <div className="clearfix"></div>
        </div>
    );
}

Quote.propTypes = {
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired
};

export default Quote;
