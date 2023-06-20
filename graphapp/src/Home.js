import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const client = new ApolloClient({
    uri:'http://localhost:8600/grapgql'
})

const GET_PRODUCTS = gql`
    query Products($id:Int){
        Products(id: $id){
            product_name,
            category,
            Price
        }
    }
`


const Products = () => {
    return(
        <div>
            <Query query={GET_PRODUCTS} client={client} variable={{id:3}}>
                {(loading,error,data) => {
                    if(loading) return <div>Loading....</div>
                    if(error) return <div>Error....</div>
                    return(
                        <div>
                            <h2>{data.Products.product_name}</h2>
                            <h2>{data.Products.category}</h2>
                            <h2>{data.Products.Price}</h2>
                        </div>
                    )
                }}
            </Query>
        </div>
    )
}


export default Products