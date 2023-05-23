import React,{Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const base_url = "http://3.17.216.66:4000";
class QuickSearch extends Component {

    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <div class="quickSearch">
                <span id="QuickSearchHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurant By MealType
                </span>
                <div>
                    <QuickDisplay mealData={this.state.mealType}/>
                </div>
            </div>
        )
    }

    //api calling on pageload 
    componentDidMount(){
        fetch(`${base_url}/quicksearch`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
    
}

export default QuickSearch