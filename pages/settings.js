import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Heading,
} from '@shopify/polaris';
import Router from 'next/router';
import NarvigationBar from '../components/NavigationBar';


export default class Settings extends Component{
  componentDidMount(){
    
  }
  render(){
    return (
      <Frame
          navigation={NarvigationBar}
      >
              <Page title={<Heading>Settings</Heading>} fullWidth>
                <Card sectioned>
                  <Layout>
                  </Layout>
                </Card>                  
              </Page>
      </Frame>
    );
  }  
}