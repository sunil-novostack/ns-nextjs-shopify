import React, { Component} from 'react';
import { Form, FormLayout, Page, Layout, Card, TextField, Button, Icon, DisplayText, Link } from '@shopify/polaris';
import {IoIosContact } from "react-icons/io";

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
    render(){
        return (
            <Page>
                <Layout>
                    <Card sectioned>
                        <Form name="signup-form">
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
                                <Button name="signup" size="medium" primary={true}>SIGN UP</Button>
                                <Link url="/signin" >have an account? Sign In</Link>
                            </FormLayout>
                        </Form>
                    </Card>
                </Layout>    
            </Page>
        );
    }
  
}