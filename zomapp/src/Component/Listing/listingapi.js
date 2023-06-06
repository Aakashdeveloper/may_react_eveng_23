import React,{Component} from 'react';
import ListingDisplay from './listingDisplay';
import './listing.css';
import axios from 'axios';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';
import Header from '../Header';

const base_url = "http://3.17.216.66:4000"
class Listing extends Component {

    constructor(props){
        super(props)

        this.state={
            restaurantList:'',
            mealId:this.props.match.params.mealId
        }
    }

    setDataPerFilter = (data) => {
        this.setState({restaurantList:data})
    }

    render() {
        return(
            <>
                <Header/>
               <div className='row'>
                   <div id="mainListing">
                       <div id="filter">
                           <CuisineFilter mealId={this.state.mealId}
                           restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                           <CostFilter mealId={this.state.mealId}
                           restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                       </div>
                       <ListingDisplay listData={this.state.restaurantList}/>
                   </div>
               </div>
            </>
            
        )
    }

    componentDidMount(){
        let mealId= this.state.mealId;
        sessionStorage.setItem('mealId',mealId);
        axios.get(`${base_url}/restaurant?mealtype_id=${mealId}`)
        .then((res) =>  this.setState({restaurantList:res.data}))
    }
}

export default Listing