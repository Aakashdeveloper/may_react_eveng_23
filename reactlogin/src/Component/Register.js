import React,{Component} from 'react';

const rurl ="http://3.17.216.66:5000/api/auth/register"
class Register extends Component {
    constructor(props){
        super(props)

        this.state={
            name:'Nitin',
            email:'nitin@gmail.com',
            password:'12345678',
            phone:'9876542233'
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    register = () =>{
        fetch(rurl,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Register User</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>Name</label>
                                    <input className="form-control" name="name" value={this.state.name}
                                    onChange={this.handleChange}/>
                                </div>
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
                                <div className="col-md-6 form-group">
                                    <label>Phone</label>
                                    <input className="form-control" name="phone" value={this.state.phone}
                                    onChange={this.handleChange}/>
                                </div>
                            </div>

                            <button className="btn btn-success" onClick={this.register}>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Register