import React,{useState,useEffect} from 'react';
import {
  Page,
  Heading,
  Frame,
  Card,
  Button,
  ResourceList,
  TextStyle,
  DisplayText,
  TextContainer,
  Tag,
  Link,
  Thumbnail,
} from '@shopify/polaris';
import Router from 'next/router';
import firebase  from '../lib/db/Firebase';
import NavigationBar from '../components/NavigationBar';

import axios from 'axios';
import Cookies from 'js-cookie';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { FaUserAltSlash } from 'react-icons/fa';
import { IoMdThermometer } from 'react-icons/io';

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
    const [axiosCalled,setAxiosCalled] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged( async (user)=>{
            if(!user){
                Router.push('/signin')
            }
        })
        if(!axiosCalled){
            const response = axios({
                headers:{
                    'shopname':Cookies.get('shopOrigin')
                },
                url:'/api/products',
                method:'get',
                params:{
                    page:1,
                    limit:20,
                }
            }).then((response) =>{
                console.log(response)
                setItems(response.data.products)
                setLoading(false);
                setAxiosCalled(true)
            })
        }
        /*
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
        */
    },[items,loading]) 
    const HandleClickImportProduct = async (_id) =>{

        const product = await items.filter(item => item._id == _id);
        const response = await AddNewProduct({
            variables:{
                input: {
                    title : product.title,
                    descriptionHtml:product.description
                },
                media:[
                    {
                        originalSource:product.images[0],
                        alt:"Sample image testing",
                        mediaContentType:"IMAGE"
                    }
                ]
            }
        })
        console.log(response);
    }
        return(
            <Frame
                navigation={<NavigationBar importProducts={true} />}
            >
            <Page title={<Heading>Imported Products</Heading>} fullWidth id="import-product">
            {loading
            ?
                (
                    <p>Please Wait While product fetching from server...</p>
                )
            :
                (items.length > 0
                ?
                    <Card>
                        <ResourceList
                            items={items}
                            renderItem={ item => {
                            const media = (
                                <div className="import-item-image-holder">
                                    <img src={item.images[0]} />
                                </div>
                            );
                            return(
                                <ResourceList.Item
                                    id={item._id}
                                    media={media}
                                >
                                <div className="item-seller-source">
                                    <DisplayText size="small"><TextStyle variation="subdued">Seller</TextStyle> ABC Company<span className="text-v-line"></span></DisplayText>                                    
                                    <DisplayText size="small"><TextStyle variation="subdued">Shop</TextStyle> {item.source} <span className="text-v-line"></span></DisplayText>                                    
                                    <DisplayText size="medium"> {item.price} </DisplayText>
                                    <p className="item-operation">
                                        <Link url={item.sourceUrl} external>Original Product Link</Link>
                                        <Button size="slim" primary onClick={ () => HandleClickImportProduct(item._id)}>Import</Button>
                                    </p>
                                </div>
                                <div className="item-title">
                                    <TextStyle variation="subdued">Product Title</TextStyle>
                                    <DisplayText size="small">{item.title}</DisplayText>
                                </div>
                                <div className="variations">
                                    <TextStyle variation="subdued">Variation <span className="variation-count">(2)</span></TextStyle>
                                    <div className="variation-list">
                                        {
                                            item.variants.map((variant,index)=>{
                                                <div className="v-item" key={index}>
                                                    <div className="image-holder">
                                                        <img src={item.images[1]} />
                                                    </div>
                                                    <div className="variation-props">
                                                        <p><span>{variant.name}</span><span className="text-v-line"></span><span>24</span></p>
                                                        <p><span>{variant.price}</span></p>
                                                    </div>
                                                </div>
                                            })
                                        }
                                                                                
                                    </div>
                                </div>
                                <div className="description">
                                    <TextStyle variation="subdued">Description</TextStyle>
                                    <TextContainer>
                                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                    </TextContainer>
                                </div>
                                <div className="tags">
                                    <Tag>Movie</Tag><Tag>Series</Tag><Tag>Collectibles</Tag>
                                </div>
                                </ResourceList.Item>
                            )
                            }}
                        >
                        </ResourceList>
                    </Card>
                :
                    <p>No Product Listed Yet...</p>
                )
            }
            </Page>
            </Frame>
        );
}