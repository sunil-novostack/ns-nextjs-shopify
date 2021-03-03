import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Heading,
} from '@shopify/polaris';
import NavigationBar from '../../components/NavigationBar';


export default class Pricerules extends Component{
  componentDidMount(){
    
  }
  render(){
    
    return (
      <Frame
        navigation={
            <NavigationBar settingPricingRule={true}/>
          }
      >
        <Page>
          <Card sectioned>
            <Layout>
              <p>setting / General page</p>
            </Layout>
          </Card>
        </Page>
      </Frame>
      
    );
  }  
}