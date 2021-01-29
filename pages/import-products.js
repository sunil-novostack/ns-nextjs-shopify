import React,{useState,useEffect} from 'react';
import {
  Page,
  Heading,
  Frame,
  Layout,
  Card,
  DataTable,
  Thumbnail,
  ResourceList,
  TextStyle,
  Button,
} from '@shopify/polaris';
import Router from 'next/router';
import firebase  from '../lib/db/Firebase';
import NarvigationBar from '../components/NavigationBar';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

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
        })
    },[items]) 
    const HandleClickImportProduct = async (product) =>{

    }
        return(
            <Frame
                navigation={NarvigationBar}
            >
            <Page title={<Heading>Imported Products</Heading>} fullWidth>
                <Card sectioned>
                    <div className="product-list-items">
                        {items.length > 0
                        ?
                            items.map( (product,index)=>{
                                return(
                                    <div className="product-item" id={"item-"+index} key={index}>
                                        <div className="image-holder">
                                            <img src={product.image} />                                         
                                        </div>
                                        <div className="item-bottom">
                                            <h2 className="item-title">{product.title}</h2>
                                            <h2 className="item-price">US $ {product.price}</h2>
                                            <Button
                                                name="importtostore"
                                                submit="false"
                                                primary={true}
                                                size="slim"
                                                onClick={() => AddNewProduct({
                                                    variables:{
                                                        input: {
                                                            title : product.title,
                                                            descriptionHtml:product.description,
                                                            variants: [
                                                                {
                                                                    price: product.price
                                                                }
                                                            ]
                                                        },
                                                        media:[
                                                            {
                                                                originalSource:product.image,
                                                                alt:"Sample image testing",
                                                                mediaContentType:"IMAGE"
                                                            }
                                                        ]
                                                    }
                                                })}
                                            >
                                            Import To Store
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <p>No Items Found...</p>                                   
                        }                         
                    </div>
                </Card>
            </Page>
            </Frame>
        );
}