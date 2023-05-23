import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './Listing/listingapi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/listing/:id" component={Listing}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;