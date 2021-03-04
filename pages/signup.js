import React, { Component} from 'react';
import Router from "next/router";
import { Form, FormLayout, Page, Layout, Card, TextField, Button, Icon, DisplayText, Link } from '@shopify/polaris';
import {IoIosContact } from "react-icons/io";
import firebase  from '../lib/db/Firebase';
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
            isLoading:false,
        }
    }
    
    handleUserFirstNameChange = (value) =>{this.setState({userFirestName:value})}
    handleUserLastNameChange = (value) => {this.setState({userLastName:value})}
    handleUsernameChange = (value) => {this.setState({userName:value})}
    handleUserpassChange = (value) => {this.setState({userPass:value})}


    handleSignupSubmit = async (event) => {
        this.setState({
            isLoading:true,
        })
        const signupForm = {
            first_name : this.state.userFirestName,
            last_name : this.state.userLastName,
            email : this.state.userName,
            url:Cookies.get('shopOrigin')
        }
        const auth = await firebase.auth()
        auth.createUserWithEmailAndPassword(this.state.userName,this.state.userPass).then( async function(){
            signupForm.uid = await firebase.auth().currentUser.uid;
            const collectionRef = await firebase.firestore().collection('users').add(signupForm)
            //Cookies.set('nsns',signupForm.uid);
            this.setState({
                isLoading:false,
            })
            Router.push('/dashboard')
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
                                <Button name="signup" size="medium" primary={true} submit="true" loading={}>SIGN UP</Button>
                                <Link url="/signin" >have an account? Sign In</Link>
                            </FormLayout>
                        </Form>
                    </Card>
                </Layout>    
            </Page>
        );
    }
  
}