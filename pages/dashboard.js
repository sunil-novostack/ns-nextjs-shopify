import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Heading,
} from '@shopify/polaris';
import Router from 'next/router';
import firebase  from '../lib/db/Firebase';
import SettingForm from '../components/SettingForm';
import CrowlUrl from '../components/CrawlUrl';
import NarvigationBar from '../components/NavigationBar';


export default class Dashboard extends Component{
  componentDidMount(){
    firebase.auth().onAuthStateChanged( async (user)=>{
      if(!user){
        Router.push('/signin')
      }
    })
    /*
    if(Cookies.get('nsns') == false){
      Router.push('/signin')
    }
    */
  }
  render(){
    return (
      <Frame
          navigation={NarvigationBar}
      >
              <Page title={<Heading>Dashboard</Heading>} fullWidth>
                <Card sectioned>
                  <Layout>
                      <SettingForm />
                      <CrowlUrl/>
                  </Layout>
                </Card>                  
              </Page>
      </Frame>
    );
  }  
}