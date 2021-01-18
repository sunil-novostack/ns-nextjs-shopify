import React,{ Component} from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { Provider } from '@shopify/app-bridge-react';
import {AppProvider} from '@shopify/polaris';
import ApolloClient from 'apollo-boost';
import enTranslations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';
import '@shopify/polaris/dist/styles.css';
import '../resource/css/style.css';

const client = new ApolloClient({
    fetchOptions:{
        credentials:'include'
    }
})

export function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
}
export default class WrappedApp extends App {

  constructor(props) {
    super(props)  
    this.state = {
       isuserLoggedin:false,
       config: {
        apiKey: API_KEY, 
        shopOrigin: Cookies.get('shopOrigin'),
        forceRedirect: true
       }
    }
  }

  
  componentDidMount(){
    if(this.state.isuserLoggedin){
      Router.push('/')
    }else{
      Router.push('/signup')
    }
  }
  
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>FB DropShipping</title>
          <meta charSet="utf-8" />
        </Head>
        {this.state.config.shopOrigin
        ? <Provider config={this.state.config}>
            <AppProvider i18n={enTranslations}>
                <Component {...pageProps} />
            </AppProvider>
          </Provider>
        :
          <AppProvider i18n={enTranslations}>
              <Component {...pageProps} />
          </AppProvider>
        }        
      </React.Fragment>
    );
  }
}