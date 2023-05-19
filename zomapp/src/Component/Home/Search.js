import React,{Component} from 'react';
import './Search.css';

const base_url = "http://3.17.216.66:4000";
class Search extends Component {

    constructor(){
        super()
        console.log("Inside Constructor")
        this.state={
            location:''
        }
    }

    render(){
        console.log("Inside render")
        return(
            <div class="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Search Place Near To You
                </div>
                <div id="dropdown">
                    <select>
                        <option>---Select City---</option>
                    </select>
                    <select className="restSelect">
                        <option>---Select Restaurants---</option>
                    </select>
                </div>
            </div>
        )
    }

    // api calling on page load 
    componentDidMount(){
        console.log("Inside componentDidMount")
        fetch(`${base_url}/location`,{method: 'GET'})
        //return promise
        .then((res) => res.json())
        // return data
        .then((data) => {
            console.log(data)
            this.setState({location:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
}

export default Search