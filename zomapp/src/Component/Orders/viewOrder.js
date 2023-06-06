import React,{Component} from 'react';
import axios from 'axios';
import Display from './displayOrder';
import Header from '../Header';

const url = "http://localhost:9188/orders"

class ViewOrder extends Component {

    constructor(){
        super()

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <>
                <Header/>
                <Display orderData={this.state.orders}/>
            </>
        )
    }

    //api caliing 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({orders:res.data})})
    }
}

export default ViewOrder