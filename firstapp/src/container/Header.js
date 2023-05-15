import React,{Component,Fragment} from 'react';
import './Header.css';

class Header extends Component{

    constructor(){
        console.log(">>>>>constructor")
        super()

        this.state={
            keyword:'User Input Here'
        }
    }

    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({keyword:event.target.value})
        this.props.userInput(event.target.value)
    }

    render(){
        console.log(">>>>>render")
        return(
            <Fragment>
                <header>
                    <div className="logo">React App</div>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                </header>
                <hr/>
            </Fragment>
        )
    }
}


export default Header;