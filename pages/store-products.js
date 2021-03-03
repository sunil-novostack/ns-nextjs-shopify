import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Heading,
} from '@shopify/polaris';
import NavigationBar from '../components/NavigationBar';
import ProductList from '../components/ProductList';

export default class Storeproducts extends Component{
  render(){
    return (
      <Frame
          navigation={<NavigationBar storeProducts={true}/>}
      >
              <Page title={<Heading>Store Products</Heading>} fullWidth>
                <Card sectioned>
                    <ProductList />
                </Card>                  
              </Page>
      </Frame>
    );
  }  
}