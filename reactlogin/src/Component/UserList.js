import React,{Component} from 'react';
import axios from 'axios';
import Display from './UserDisplay';

const url = "http://3.17.216.66:5000/api/auth/users"

class ViewUser extends Component {

    constructor(){
        super()

        this.state={
            users:''
        }
    }

    render(){
        if(sessionStorage.getItem('ltk') === null){
            this.props.history.push('/')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin'){
            this.props.history.push('/profile')
        }
        return(
            <>
                <Display userData={this.state.users}/>
            </>
        )
    }

    //api caliing 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({users:res.data})})
    }
}

export default ViewUser