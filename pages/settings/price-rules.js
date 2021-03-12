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
  Heading,
} from '@shopify/polaris';
import NavigationBar from '../../components/NavigationBar';
import axios from 'axios';
import Cookies from 'js-cookie';

export default class Pricerules extends Component{
    constructor(props){
        super(props);
        this.state = {
            options:[
                {label:'MULTIPLIER',value:'*'},
                {label:'FIXED',value:'+'}
            ],            
            settings:{
                    priceRules : {
                    pricehikeconditional:'*',
                    productPriceHike:'2',
                }
            },
            
        }        
    }
    componentDidMount(){
        try{
            const response = axios({
                 headers:{
                    'shopname':Cookies.get('shopOrigin')
                },
                url:'/api/settings',
                method:'GET',         

            }).then((response) =>{
                //console.log(response)
                response.data.settings
                ? 
                    this.setState({
                        settings:response.data.settings
                    })
                :
                    this.setState({
                        settings:{
                            priceRules : {
                                pricehikeconditional:'*',
                                productPriceHike:'2',
                            }
                        }
                    })
            })
        }catch(error){
            console.log(error)
        }
    }

    handleProductPriceHike = async (value) =>{
        console.log(this.state.settings)
        this.setState({
            settings:{
                ...this.state.settings,
                priceRules: {
                    ...this.state.settings.priceRules,
                    productPriceHike: value,                    
                }
            }                
        }, () => {
            try{            
                const response = axios({
                    headers:{
                        'shopname':Cookies.get('shopOrigin')
                    },
                    url:'/api/settings',
                    method:'post',
                    data:this.state.settings
                }).then((response) =>{
                    console.log(response)
                })
                
                //console.log(response)
            }catch(error){
                console.log(error)
            }
        })
    }
    handlePricehikeconditional = async (value) =>{
        console.log(this.state.settings)
        this.setState({
            settings:{
                ...this.state.settings,
                priceRules: {
                    ...this.state.settings.priceRules,
                     pricehikeconditional: value,                  
                }
            }
        })        
    }



    render(){
        return (
        <Frame
            navigation={
                <NavigationBar settings={true} settingPricingRule={true}/>
            }
        >
            <Page title={<Heading>Setting / Price Rules</Heading>} fullWidth>
            <Card sectioned>
                <Form name="price-rules" method="post">
                    <FormLayout>
                        <Stack alignment="center">
                            <Stack.Item fill>Product Price Margin</Stack.Item>
                            <Stack.Item>
                                <TextField
                                    connectedLeft={
                                            <Button
                                                disabled={true}
                                            >
                                                COST (USD)
                                                    {this.state.settings.priceRules.pricehikeconditional=='*'
                                                    ?
                                                        ' x '
                                                    :
                                                        ' + '
                                                    }
                                            </Button>
                                    }
                                    name="productPriceHike"
                                    type="text"
                                    value={this.state.settings.priceRules.productPriceHike}
                                    onChange={this.handleProductPriceHike}
                                    connectedRight={
                                        <Select
                                            name="pricehikeconditional"
                                            options={this.state.options}
                                            onChange={this.handlePricehikeconditional}
                                            value={this.state.settings.priceRules.pricehikeconditional}
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