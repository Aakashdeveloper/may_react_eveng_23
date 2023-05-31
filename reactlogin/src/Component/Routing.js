import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './login';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <div className='container'>
                <Route exact path="/" component={Login}/>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing