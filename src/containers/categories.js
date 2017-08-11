'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Categories extends Component {
    render() {
        return (
            <ul>
                <li>cat1</li>
                <li>cat2</li>
                <li>cat3</li>
                <li>cat4</li>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories;
    }
}

export default connect(mapStateToProps)(Categories);