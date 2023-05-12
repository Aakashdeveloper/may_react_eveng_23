import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './data.json';

class App extends Component{

    constructor(props){
        super(props)

        this.state={
            productData:JSON
        }
    }
    render(){
        return(
            <>
                <Header/>
                <ProductDisplay products={this.state.productData}/>
                <Footer year="2023" month="May"/>
            </>
        )
    }
}


export default App;