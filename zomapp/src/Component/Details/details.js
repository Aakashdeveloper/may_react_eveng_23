import React,{Component} from 'react';
import './details.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Details extends Component{

    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }

    render(){
        return(
            <>
                <div className="main">
                    <div className="tileImage">

                    </div>
                    <div className="tileContent">
                        <h3>Details</h3>
                    </div>
                </div>
            </>
        )
    }

}

export default Details;