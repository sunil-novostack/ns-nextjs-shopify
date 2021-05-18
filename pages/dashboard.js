import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Heading,
  Button,
} from '@shopify/polaris';
import Router from 'next/router';
import firebase  from '../lib/db/Firebase';
import SettingForm from '../components/SettingForm';
import CrowlUrl from '../components/CrawlUrl';
import NavigationBar from '../components/NavigationBar';

import axios from 'axios';
import Cookies from 'js-cookie';
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
  handleGetThemes = () => {
    const response = axios({
        headers:{
          'shopname':Cookies.get('shopOrigin')
        },
        url:'/api/theme',
        method:'GET',
    }).then((response)=> {
      console.log(response)
    })
  }
  render(){
    return (
      <Frame
          navigation={<NavigationBar dashboard={true} />}
      >
              <Page title={<Heading>Dashboard</Heading>} fullWidth>
              <Button
                onClick={()=>{
                  this.handleGetThemes();
                }}
              >
              Check theme
              </Button>
                <Card sectioned>
                  <Layout sectioned={true}>
                      <SettingForm />
                      <CrowlUrl/>
                  </Layout>
                </Card>                  
              </Page>
      </Frame>
    );
  }  
}