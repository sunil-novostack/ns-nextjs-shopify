import React, { Component} from 'react';
import Router from "next/router";
import { Form, FormLayout, Page, Layout, Card, TextField, Button, Icon, DisplayText, Link } from '@shopify/polaris';
import {IoIosContact } from "react-icons/io";
import FbCon from "../lib/bds/firebase";
import Cookies from 'js-cookie';

export default class Signup extends Component {
    constructor(props) {
        super(props)  
        this.state = {
            isuserLoggedin:false,
            userFirestName:'',
            userLastName:'',
            userName:'',
            userPass:'',
        }
    }
    
    handleUserFirstNameChange = (value) =>{this.setState({userFirestName:value})}
    handleUserLastNameChange = (value) => {this.setState({userLastName:value})}
    handleUsernameChange = (value) => {this.setState({userName:value})}
    handleUserpassChange = (value) => {this.setState({userPass:value})}


    handleSignupSubmit = async (event) => {
        console.log(Cookies.get('shopOrigin'))
        const signupForm = {
            first_name : this.state.userFirestName,
            last_name : this.state.userLastName,
            email : this.state.userName,
            url:Cookies.get('shopOrigin')
        }
        FbCon.auth.createUserWithEmailAndPassword(this.state.userName,this.state.userPass).then( async function(){
            signupForm.uid = FbCon.auth.currentUser.uid;
            Cookies.set('nsns',signupForm.uid);
            Router.push('/')
            /*
            const collectionRef = await FirebaseConnect.firestore().collection('users')        
            collectionRef.set(signupForm);
            */
        },function(error){
            console.log(error)
        })
    }
    render(){
        return (
            <Page>
                <Layout>
                    <Card sectioned>
                        <Form name="signup-form" onSubmit={this.handleSignupSubmit} method="post">
                            <FormLayout>
                                <Icon source={IoIosContact} backdrop={false} />
                                <DisplayText size="medium">Sign Up</DisplayText>
                                <FormLayout.Group condensed>
                                    <TextField
                                        name="userFirestName"
                                        type="text"
                                        placeholder="First Name *"
                                        value={this.state.userFirestName}
                                        onChange={this.handleUserFirstNameChange}
                                    />
                                    <TextField
                                        name="userLastName"
                                        type="text"
                                        placeholder="Last Name "
                                        value={this.state.userLastName}
                                        onChange={this.handleUserLastNameChange}
                                    />
                                </FormLayout.Group>
                                
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
                                <Button name="signup" size="medium" primary={true} submit="true">SIGN UP</Button>
                                <Link url="/signin" >have an account? Sign In</Link>
                            </FormLayout>
                        </Form>
                    </Card>
                </Layout>    
            </Page>
        );
    }
  
}