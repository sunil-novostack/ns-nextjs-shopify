import React, {Component} from 'react';
import Router from "next/router";
import {Form, Page, FormLayout, Layout, Card, TextField, Button, Icon, DisplayText, Link } from '@shopify/polaris';
import {IoMdLock } from "react-icons/io";
import firebase  from '../lib/db/Firebase';
//import Cookies from 'js-cookie';

export default class Signin extends Component{
    constructor(props) {
        super(props)  
        this.state = {
            isuserLoggedin:false,
            userName:'',
            userPass:'',
            loading:false,
            errorMessage:'',
        }
    }
    
    handleUsernameChange = (value) => {
        this.setState({userName: value});
    }
    handleUserpassChange = (value) => {
        this.setState({userPass: value});
    }
    handleSigninSubmit = async (event) => {
        this.setState({loading:true})
        const auth = await firebase.auth()
        /*
        auth.signInWithEmailAndPassword(this.state.userName,this.state.userPass).then( async function(){
            const uid = await firebase.auth().currentUser.uid;
            //Cookies.set('nsns',uid);
            Router.push('/dashboard')
        },function(error){
            console.log(error)
            
        }).catch((error)=>{
            this.setState({errorMessage:error.message})
            this.setState({loading:false});
        })
        */
        auth.signInWithEmailAndPassword(this.state.userName,this.state.userPass).then((user) => {
            //const uid = await firebase.auth().currentUser.uid;
            Router.push('/dashboard')
        }).catch((error) => {
            this.setState({errorMessage:error.message})
            this.setState({loading:false});
        })

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
                                <Button
                                    name="login"
                                    size="medium"
                                    primary={true}
                                    submit="true"
                                    loading={this.state.loading ? true : false}
                                >
                                    SIGN IN
                                                                       
                                </Button>
                                {this.state.errorMessage!=''
                                ?
                                    <p>{this.state.errorMessage}</p>
                                :
                                ''
                                }
                                <Link url="/resetpass">Forgot Password?</Link><Link url="/signup" >Don't have an account? Sign Up</Link>
                            </FormLayout>
                        </Form>
                    </Card>
                </Layout>
            </Page>    
        );
    }
  
}