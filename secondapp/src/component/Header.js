import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <>
            <center>
                <h1>Routing</h1>
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
                <Link to="/profile">Profile</Link>
            </center>
            <hr/>
        </>
    )
}

export default Header;