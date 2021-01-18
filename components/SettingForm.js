import React,{ Component } from 'react';
import { 
    Layout,
    AccountConnection,
    Link,
    Form,
    FormLayout,
} from '@shopify/polaris';
import Cookies from 'js-cookie';
export default class SettingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            connected:Cookies.get('shopOrigin') ? true : false,
        }
    }
    render(){
        console.log(Cookies.get('shopOrigin'))
        return(
                <Form>
                    <FormLayout>
                        <Layout.AnnotatedSection
                            title="Connected User"
                            description="Connect to your shopify ac with custom Dashboard"
                        >
                        {this.accountConnectionMarkup()}
                        </Layout.AnnotatedSection>
                    </FormLayout>
                </Form>
        );
    }
    toggleConnection(){
        this.setState( ({connected}) => ({connected:!connected}) );
    }

    accountConnectionMarkup(){
        return this.state.connected
        ?(
            <AccountConnection
                avatarUrl="Now Connected"                
                action={{content: 'Disconnect', onAction: this.toggleConnection.bind(this)}}
                accountName="Sunil-Novostack"
                details="sunil-novostack.myshopify.com"
                connected={this.state.connected}
                termsOfService={
                    <p>By Clicking Connect, You are agree to accept our terms and condition's <Link url='#'>Terms And Conditions</Link> Its Completly Free to Use</p>
                }
            />
        )
        :(
            <AccountConnection
                title="Connct To Shop"
                action={{content: 'Connect',onAction: this.toggleConnection.bind(this)}}
                details="No Account Connected"
                connected={this.state.connected}
                termsOfService={
                    <p>By Clicking Connect, You are agree to accept our terms and condition's <Link url='#'>Terms And Conditions</Link> Its Completly Free to Use</p>
                }
            />
        )
    }
}