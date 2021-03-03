import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Heading,
} from '@shopify/polaris';
import NavigationBar from '../../components/NavigationBar';


export default class General extends Component{
  componentDidMount(){
    
  }
  render(){
    
    return (
      <Frame
        navigation={
            <NavigationBar settingsGeneral={true}/>
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