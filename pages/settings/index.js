import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Heading,
} from '@shopify/polaris';
import NavigationBar from '../../components/NavigationBar';


export default class Index extends Component{
  componentDidMount(){
    
  }
  render(){
    
    return (
      <Frame
        navigation={
            <NavigationBar settings={true}/>
          }
      >
        <Page>
          <Card sectioned>
            <Layout>
              <p>setting default page</p>
            </Layout>
          </Card>
        </Page>
      </Frame>
      
    );
  }  
}