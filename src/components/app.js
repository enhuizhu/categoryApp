'use strict';

import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Categories from '../containers/categories';

const App = () => {
    return (
        <div>
            <Header/>
            <Categories/>
            <Footer/>
        </div>
    );
};

export default App;