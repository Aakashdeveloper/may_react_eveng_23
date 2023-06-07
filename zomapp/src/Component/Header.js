import React,{useState,useEffect} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './Header.css';

const url = "http://3.17.216.66:5000/api/auth/userinfo"

const Header = (props) => { 
    const [userData,setUserData] = useState()
    const [socialData,setSocialData] = useState()

    useEffect(() => {

        if(props.location.search){
            console.log(">>>>>>in google")
            if(props.location.search.split('=')[0]==='?site'){
                let siteName = props.location.search.split('&')[0].split('=')[1];
                if(siteName === 'google'){
                    sessionStorage.setItem('socialLogin','true')
                    let id = props.location.search.split('&')[1].split('=')[1];
                    fetch(`http://localhost:1234/users/${id}`,{method:'GET'})
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("google data>>",data)
                        setSocialData(data)
                    })
                }
            }
        }else{
            console.log(">>>>>>in JWT")
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
        }
    },[])

    const handleLogout = () => {
        sessionStorage.removeItem('userInfo');
        sessionStorage.removeItem('ltk');
        sessionStorage.setItem('loginStatus','LoggedOut');
        setUserData('')
        props.history.push('/')
    }

    const ConditionalHeader = () => {
        if(userData || socialData){
            let test = userData?userData.auth:true
            console.log(">>>>>>in ConditionalHeader1",test)
            if(test){
                console.log(">>>>>>in ConditionalHeader1")
                if(sessionStorage.getItem('socialLogin') === "true"){
                    console.log(">>>>>>in ConditionalHeader2")
                    let data = socialData;
                    let img = data.photos[0].value;
                    return(
                        <>
                            <Link to="/" className="btn btn-success">
                                <img src={img} style={{height:30,width:30}}/>&nbsp;
                                Hi {data.name.givenName}
                            </Link> &nbsp;
                            <Link to="/login" className="btn btn-danger"
                            onClick={handleLogout}>
                                <span className="glyphicon glyphicon-log-out"></span> Logout
                            </Link>
                        </>
    
                    )
                }else if(userData.name){
                    console.log(">>>>>>in ConditionalHeader3")
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
        
                }
            }else{
                console.log(">>>>>>in ConditionalHeader4")
                return(
                    <>
                        <a href="http://localhost:9800/auth/google" className='btn'>
                            <img src="https://i.ibb.co/37W2XwW/google.png" style={{height:30,width:30}}/>
                        </a>
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