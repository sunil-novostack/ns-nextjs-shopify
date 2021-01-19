import React,{Component} from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import {
  Page,
  Frame,
  Layout,
} from '@shopify/polaris';
import firebase  from '../lib/db/Firebase';

export default class App extends Component{  

  constructor(props) {
    super(props)
    /*
    this.state = {
       isuserLoggedin:false,
       config: {
        apiKey: API_KEY, 
        shopOrigin: Cookies.get('shopOrigin'),
        forceRedirect: true
       }
    }
    */
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged( async (user)=>{
      if(user){
        Router.push('/dashboard')
      }else{
        Router.push('/signin')
      }
    })
    /*
    if(!Cookies.get('nsns') == false){
      Router.push('/signin')
    }else{
      Router.push('/dashboard')
    }
    */
  }
  render(){
    return (
      <Frame>
             
      </Frame>
    );
  }  
}