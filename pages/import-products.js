import React,{useState,useEffect} from 'react';
import {
  Page,
  Heading,
  Frame,
  Card,
  Button,
} from '@shopify/polaris';
import Router from 'next/router';
import firebase  from '../lib/db/Firebase';
import NarvigationBar from '../components/NavigationBar';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { FaUserAltSlash } from 'react-icons/fa';

const ADD_NEW_PRODUCT = gql`
    mutation addNewProduct($input: ProductInput!, $media: [CreateMediaInput!]!) {
        productCreate(input: $input, media:$media) {
            product {
                id
            }
        }
    }
`;

export default function Importproducts (){
    const [items,setItems] = useState([])
    const [AddNewProduct] = useMutation(ADD_NEW_PRODUCT);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        firebase.auth().onAuthStateChanged( async (user)=>{
            if(!user){
                Router.push('/signin')
            }
        })
        const firedb = firebase.firestore()
        let products = [];
        firedb.collection('sunil-novostack.myshopify.com')
        .get()
        .then((querySnapshot) => {            
            querySnapshot.forEach((doc) => {                
               products.push(doc.data())
            })
            setItems(products)
            setLoading(false);
        })
    },[items,loading]) 
    const HandleClickImportProduct = async (product) =>{
        
    }
        return(
            <Frame
                navigation={NarvigationBar}
            >
            <Page title={<Heading>Imported Products</Heading>} fullWidth>
            {loading
            ?
                (
                    <p>Please Wait While product fetching from server...</p>
                )
            :
                (items.length > 0
                ?
                    items.map( (product,index)=>{
                        return(
                            <Card sectioned key={index}>
                                <div className="card-section fisrt">
                                    <div className="image-holder">
                                        <img src={product.image} alt=""/>
                                    </div>
                                </div>
                                <div className="card-section second">

                                </div>
                            </Card>
                        )
                    })
                :
                    <p>No Product Listed Yet...</p>
                )
            }
            </Page>
            </Frame>
        );
}