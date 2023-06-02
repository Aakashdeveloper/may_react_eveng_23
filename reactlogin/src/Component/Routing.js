import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './login';
import Register from './Register';
import Profile from './Profile';
import UserList from './UserList';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <div className='container'>
                <Route exact path="/" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/users" component={UserList}/>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing