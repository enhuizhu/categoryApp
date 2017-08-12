'use strict';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectCategory} from '../actions/index';
import Categories from '../components/categories/categories';

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectCategory: selectCategory}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories);