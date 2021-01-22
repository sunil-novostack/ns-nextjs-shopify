import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Heading,
} from '@shopify/polaris';
import NarvigationBar from '../components/NavigationBar';


export default class Storeproducts extends Component{
  render(){
    return (
      <Frame
          navigation={NarvigationBar}
      >
              <Page title={<Heading>Store Products</Heading>} fullWidth>
                <Card sectioned>
                  <Layout>
                  </Layout>
                </Card>                  
              </Page>
      </Frame>
    );
  }  
}