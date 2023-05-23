import React,{Component} from 'react';
import ListingDisplay from './listingDisplay';
import './listing.css';

class Listing extends Component {
    render() {
        return(
            <>
                <h1>Listing Api</h1>
                <ListingDisplay/>
            </>
            
        )
    }
}

export default Listing