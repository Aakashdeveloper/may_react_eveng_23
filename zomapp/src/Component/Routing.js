import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './Listing/listingapi';
import Details from './Details/details';
import PlaceOrder from '../Component/Orders/PlaceOrder';
import ViewOrder from '../Component/Orders/viewOrder';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route  path="/listing/:mealId" component={Listing}/>
            <Route  path="/details" component={Details}/>
            <Route  path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route  path="/viewBooking" component={ViewOrder}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;