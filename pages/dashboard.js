import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
} from '@shopify/polaris';
import SettingForm from '../components/SettingForm';
import CrowlUrl from '../components/CrawlUrl';
import NarvigationBar from '../components/NavigationBar';


export default class Dashboard extends Component{  
  render(){
    return (
      <Frame
          navigation={NarvigationBar}
      >
              <Page
              title="Dashboard"
              >
                  <Layout>
                      <SettingForm />
                      <CrowlUrl/>
                  </Layout>
                  
              </Page>
      </Frame>
    );
  }  
}