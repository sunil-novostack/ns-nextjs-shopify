import React,{Component} from 'react';
import {
  Page,
  Frame,
  Card,
  Select,
  TextField,
  Form,
  Stack,
  FormLayout,
  Button,
} from '@shopify/polaris';
import NavigationBar from '../../components/NavigationBar';


export default class Pricerules extends Component{
    constructor(props){
        super(props);
        this.state = {
            options:[
                {label:'MULTIPLIER',value:'*'},
                {label:'FIXED',value:'+'}
            ],
            pricehikeconditional:'*',
            productPriceHike:'2',
        }        
    }

    handleProductPriceHike = (value) =>{this.setState({productPriceHike:value})}
    handlePricehikeconditional = (value) =>{this.setState({pricehikeconditional:value})}

    render(){
    
        return (
        <Frame
            navigation={
                <NavigationBar settings={true} settingPricingRule={true}/>
            }
        >
            <Page>
            <Card sectioned>
                <Form name="price-rules" method="post">
                    <FormLayout>
                        <Stack alignment="center">
                            <Stack.Item fill>Product Price</Stack.Item>
                            <Stack.Item>
                                <TextField
                                    connectedLeft={
                                            <Button
                                                disabled="true"
                                            >
                                                COST (USD)
                                                    {this.state.pricehikeconditional=='*'
                                                    ?
                                                        ' x '
                                                    :
                                                        ' + '
                                                    }
                                            </Button>
                                    }
                                    name="productPriceHike"
                                    type="text"
                                    value={this.state.productPriceHike}
                                    onChange={this.handleProductPriceHike}
                                    connectedRight={
                                        <Select
                                            name="pricehikeconditional"
                                            options={this.state.options}
                                            onChange={this.handlePricehikeconditional}
                                            value={this.state.pricehikeconditional}
                                        />
                                    }
                                />
                            </Stack.Item>
                        </Stack>
                    </FormLayout>               
                </Form>
            </Card>
            </Page>
        </Frame>
        
        );
    }  
}