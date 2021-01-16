import React, {Component} from 'react';
import {Form, Page, FormLayout, Layout, Card, TextField, Button, Icon, DisplayText, Link } from '@shopify/polaris';
import {IoMdLock } from "react-icons/io";

export default class Signin extends Component{
    constructor(props) {
        super(props)  
        this.state = {
            isuserLoggedin:false,
            userName:'',
            userPass:'',
        }
    }
    
    handleUsernameChange = (value) => {
        this.setState({userName: value});
    }
    handleUserpassChange = (value) => {
        this.setState({userPass: value});
    }
    handleSigninSubmit = (event) => {
        
    }

    render(){
        return (
            <Page>
                <Layout>
                    <Card sectioned>
                        <Form name="signin-form" onSubmit={this.handleSigninSubmit} method="post">
                            <FormLayout>
                                <Icon source={IoMdLock} backdrop={false} />
                                <DisplayText size="medium">Sign In</DisplayText>
                                <TextField
                                    name="userName"
                                    type="email"
                                    placeholder="Email Address *"
                                    value={this.state.userName}
                                    onChange={this.handleUsernameChange}
                                />
                                <TextField
                                    name="userPass"
                                    type="password"
                                    placeholder="Password *"
                                    value={this.state.userPass}
                                    onChange={this.handleUserpassChange}
                                   
                                />
                                <Button name="login" size="medium" primary={true} submit="true">SIGN IN</Button>
                                
                                <Link url="/resetpass">Forgot Password?</Link><Link url="/signup" >Don't have an account? Sign Up</Link>
                            </FormLayout>
                        </Form>
                    </Card>
                </Layout>
            </Page>    
        );
    }
  
}