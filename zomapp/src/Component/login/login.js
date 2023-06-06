import React,{Component} from 'react';
import Header from '../Header';

const lurl ="http://3.17.216.66:5000/api/auth/login"
class Login extends Component {
    constructor(props){
        super(props)

        this.state={
            email:'nitin@gmail.com',
            password:'12345678',
            message:''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    login = () =>{
        fetch(lurl,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token);
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
                <Header/>
                <div className="container">
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <h3>Login User</h3>
                        </div>
                        <div className="panel-body">
                            <h2 style={{color:'red'}}>{this.state.message}</h2>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>Email</label>
                                    <input className="form-control" name="email" value={this.state.email}
                                    onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Password</label>
                                    <input className="form-control" name="password" value={this.state.password}
                                    onChange={this.handleChange}/>
                                </div>
                            </div>

                            <button className="btn btn-info" onClick={this.login}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login