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