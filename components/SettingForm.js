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
        return(
                <Form method="post">
                    <FormLayout>
                        <Layout.AnnotatedSection
                            title="Connected Store"
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
                action={{content: 'Connected'}}
                details={Cookies.get('shopOrigin')}
                connected={this.state.connected}
                termsOfService={
                    <p>You are now Connected with your store Find out what products listed or check out with export porduct to store</p>
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