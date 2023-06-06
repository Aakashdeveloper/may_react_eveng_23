import React,{useState,useEffect} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './Header.css';

const url = "http://3.17.216.66:5000/api/auth/userinfo"

const Header = (props) => { 
    const [userData,setUserData] = useState()

    useEffect(() => {
        console.log(">>>>>>useEffect")
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(">>>>>>data",data)
            setUserData(data)
        })
    },[])

    const handleLogout = () => {
        sessionStorage.removeItem('userInfo');
        sessionStorage.removeItem('ltk');
        sessionStorage.setItem('loginStatus','LoggedOut');
        setUserData('')
        props.history.push('/')
    }

    const ConditionalHeader = () => {
        if(userData){
            if(userData.name){
                sessionStorage.setItem('userInfo',JSON.stringify(userData));
                sessionStorage.setItem('loginStatus','LoggedIn');
                return(
                    <>
                        <Link to="/" className="btn btn-info">
                            <span className="glyphicon glyphicon-user"></span> Hi {userData.name}
                        </Link> &nbsp;
                        <Link to="/login" className="btn btn-danger"
                        onClick={handleLogout}>
                            <span className="glyphicon glyphicon-log-out"></span> Logout
                        </Link>
                    </>
                )
    
            }else{
                return(
                    <>
                        <Link to="/register" className="btn btn-info">
                            <span className="glyphicon glyphicon-user"></span> Sign Up
                        </Link> &nbsp;
                        <Link to="/login" className="btn btn-success">
                            <span className="glyphicon glyphicon-log-in"></span> Login
                        </Link>
                    </>
                )
            }
        }
       
    }



    return(
        <header>
            <div id="brand">
                Developer Funnel  <Link className="btn btn-info" to="/">Home</Link>
            </div>
            <div id="social">
                {ConditionalHeader()}
            </div>
        </header>
    )
}

export default withRouter(Header);