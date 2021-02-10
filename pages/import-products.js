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
  Tag,
  Link,
  Thumbnail,
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
                                    <img src={item.image} />
                                </div>
                            );
                            return(
                                <ResourceList.Item
                                    id={item.uid}
                                    media={media}
                                >
                                <div className="item-seller-source">
                                    <DisplayText size="small"><TextStyle variation="subdued">Seller</TextStyle> ABC Company<span className="text-v-line"></span></DisplayText>                                    
                                    <DisplayText size="small"><TextStyle variation="subdued">Shop</TextStyle> Wallmart <span className="text-v-line"></span></DisplayText>                                    
                                    <DisplayText size="medium"> $40-$60 </DisplayText>
                                    <p className="item-operation">
                                        <Link extenal url="#">Original Product Link</Link>
                                        <Button size="slim" primary>Import</Button>
                                    </p>
                                </div>
                                <div className="item-title">
                                    <TextStyle variation="strong">Product Title</TextStyle>
                                    <DisplayText size="small">{item.title}</DisplayText>
                                </div>
                                <div className="variations">
                                    <DisplayText size="small">Variation <span className="variation-count">(2)</span></DisplayText>
                                    <div className="variation-list">
                                        <Card sectioned>
                                            <Card.Section>
                                                <Thumbnail source={item.image} alt="Black choker necklace" size="small" />
                                            </Card.Section>
                                            <Card.Section>
                                               <p><span>Black</span><span>28</span></p>
                                               <p><span>$45</span></p> 
                                            </Card.Section>
                                        </Card>
                                    </div>
                                </div>
                                <div className="description">
                                    <DisplayText size="small">
                                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                    </DisplayText>
                                </div>
                                <div className="tags">
                                    <Tag>Movie</Tag><Tag>Series</Tag><Tag>Collectibles</Tag><Tag>Add Tag</Tag>
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