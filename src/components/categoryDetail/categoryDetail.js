'use strict';

import React, {Component} from 'react';

class CategoryDetail extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.category}</h1>
                this is CategoryDetail
            </div>
        );
    }   
}

export default CategoryDetail;
