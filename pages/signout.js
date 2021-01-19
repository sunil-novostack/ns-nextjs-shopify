import React, {Component} from 'react';
import Router from "next/router";
import {Page } from '@shopify/polaris';
import firebase  from '../lib/db/Firebase';
//import Cookies from 'js-cookie';

export default class Signout extends Component{
    constructor(props) {
        super(props)  
        this.state = {
            isuserLoggedin:false,
            userName:'',
            userPass:'',
        }
    }
    componentDidMount(){
        firebase.auth().signOut().then(function() {
            //Cookies.set('nsns',false);
            Router.push('/signin')
        }, function(error) {
        console.error('Sign Out Error', error);
        });
        
    }
    render(){
        return (
            <Page>
                <p>You Redirect to Singin Page</p>
            </Page>    
        );
    }
  
}