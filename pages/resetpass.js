import React, { Component} from 'react';
import {
  Form,
  Page,
  FormLayout,
  Layout,
  Card,
  TextField,
  Button,
  DisplayText,
  TextContainer,
  Navigation,
  Link,
} from '@shopify/polaris';
import {IoMdArrowBack } from "react-icons/io";

export default class resetpass extends Component{
    constructor(props) {
        super(props)  
        this.state = {
            isuserLoggedin:false,
            userName:'',
        }
    }
    handleUsernameChange = (value) => { this.setState({userName:value}) }
    render(){
        return (
                <Page>
                    <Layout>
                        <Card sectioned>
                            <Form name="resetpass-form">
                                <Navigation location="/resetpass">            
                                    <Navigation.Section
                                        items={[
                                            {
                                                label: 'Back to Login',
                                                icon: IoMdArrowBack,
                                                url:'/signin',
                                            },
                                        ]}
                                    />
                                </Navigation>
                                <FormLayout>
                                    <DisplayText size="small">Reset Password</DisplayText>
                                    <TextField
                                        name="userEmail"
                                        type="email"
                                        placeholder="Email Address *"
                                        value={this.state.userName}
                                        onChange={this.handleUsernameChange}
                                    />
                                    <Button name="login" size="medium" primary={true}>RESET</Button>                            
                                </FormLayout>
                            </Form>
                            <TextContainer>
                                <p>By Pressing Button your password will reset with new auto geenrated password which will send on your given email box...</p>
                            </TextContainer>
                        </Card>
                    </Layout>
                </Page>    
        );
    }
  

}