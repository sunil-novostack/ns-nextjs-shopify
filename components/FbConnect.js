import React,{ Component } from 'react';
import { 
    Layout,
    AccountConnection,
    Link,
    Form,
    FormLayout,
} from '@shopify/polaris';
import Cookies from 'js-cookie';
import FacebookLogin from "react-facebook-login";
import graph from "fb-react-sdk";
export default class FbConnect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            connected:Cookies.get('FBConnect') ? true : false,
        }
    }
    render(){
        return(
                <Form method="post">
                    <FormLayout>
                        <Layout.AnnotatedSection
                            title="FB Commerce"
                            description="Connect to your Facebook Commerce and manage all items from here"
                        >
                        {this.accountConnectionMarkup()}
                        </Layout.AnnotatedSection>
                    </FormLayout>
                </Form>
        );
    }
    toggleConnection(){
        //this.setState( ({connected}) => ({connected:!connected}) );
        //fb login
    }

    responseFacebook=(response) =>{
        console.log(response);
        this.setState({accessToken: response.accessToken});
        graph.setAccessToken(response.accessToken);
        
        graph.get(response.id + "/businesses", function (err, res) {
            console.log(res); 
            let businessId = res.data[0].id;
            
            graph.get(businessId + "/owned_product_catalogs", function (err, res) {
                let catalogId= res.data[0].id;
                console.log(res);
                graph.get(catalogId + "/products", function (err, res) {
                console.log(res);
                });
            });
            
        });
        
    }

    accountConnectionMarkup(){
        // return this.state.connected
        // ?(
        //     <AccountConnection
        //         avatarUrl="Facebook Connected"                
        //         action={{content: 'Facebook Connected'}}
        //         details={Cookies.get('FBConnect')}
        //         connected={this.state.connected}
        //         termsOfService={
        //             <p>You are now Connected with your FB Commerce Find out what items / products listed or check out with export porduct to store</p>
        //         }
        //     />
        // )
        // :(
        //     <AccountConnection
        //         title="Connct To Facebook"
        //         action={{content: 'Connect Facebook',onAction: this.toggleConnection.bind(this)}}
        //         details="No Account Connected"
        //         connected={this.state.connected}
        //         termsOfService={
        //             <p>By Clicking Connect, You are agree to accept our terms and condition's <Link url='#'>Terms And Conditions</Link> Its Completly Free to Use</p>
        //         }
        //     />
        // )
        return(
            <FacebookLogin
                appId="281213496701991"
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile,email,business_management,catalog_management"
                callback={this.responseFacebook}
            />
        )  
            
            
    }
}