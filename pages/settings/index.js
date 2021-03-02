import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Heading,
} from '@shopify/polaris';
import SettingNavigationBar from '../../components/SettingNavigationBar';


export default class Index extends Component{
  componentDidMount(){
    
  }
  render(){
    return (
      <Frame
          navigation={SettingNavigationBar}
      >
              <Page title={<Heading>Settings</Heading>} fullWidth>
                <Card sectioned>
                  <Layout>
                  <p>setting content</p>
                  </Layout>
                </Card>                  
              </Page>
      </Frame>
    );
  }  
}