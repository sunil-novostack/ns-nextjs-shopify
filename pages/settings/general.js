import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Heading,
} from '@shopify/polaris';
import NavigationBar from '../../components/NavigationBar';
import FbConnect from '../../components/FbConnect';

export default class General extends Component{
  componentDidMount(){
    
  }
  render(){
    
    return (
      <Frame
        navigation={
            <NavigationBar settings={true} settingGeneral={true}/>
          }
      >
        <Page title={<Heading>Setting / General</Heading>} fullWidth>
          <Card sectioned>
            <Layout>
              <FbConnect/>
            </Layout>
          </Card>
        </Page>
      </Frame>
      
    );
  }  
}