import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Heading,
} from '@shopify/polaris';
import SettingNavigationBar from '../../components/SettingNavigationBar';
import NarvigationBar from '../../components/NavigationBar';


export default class Index extends Component{
  componentDidMount(){
    
  }
  render(){
    return (
      <Frame
        navigation={NarvigationBar}
      >
        
      </Frame>
      
    );
  }  
}