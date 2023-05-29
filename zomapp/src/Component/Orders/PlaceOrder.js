import React,{Component} from 'react';
import './placeOrder.css';

class PlaceOrder extends Component {
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*10000),
            hotel_name:this.props.match.params.restName,
            name:'',
            email:'',
            cost:0,
            phone:'',
            address:'U Block Delhi',
            menuItem:''
        }
    }

    handleChange = () => {}

    PlaceOrder = () =>{}

    render(){
        return(
            <>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Your Order for the Rest {this.state.hotel_name}</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <input type="hidden" name="cost" value={this.state.cost}/>
                                <input type="hidden" name="id" value={this.state.id}/>
                                <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>
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
                                    <label>Phone</label>
                                    <input className="form-control" name="phone" value={this.state.phone}
                                    onChange={this.handleChange}/>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address</label>
                                    <input className="form-control" name="address" value={this.state.address}
                                    onChange={this.handleChange}/>
                                </div>
                                <div className='row'>
                                    <div className="col-md-12">
                                        <h2>Total Price is Rs.{this.state.cost}</h2>
                                    </div>
                                </div>
                                    <button className="btn btn-success" onClick={this.PlaceOrder}>
                                        Checkout
                                    </button>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PlaceOrder