import React,{Component} from 'react';
import {
  Page,
  Frame,
  Layout,
  Card,
  Select,
  TextField,
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
            pricehikeconditional:['*'],
            productPriceHike:'',
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
                <Layout>
                    <Form name="price-rules" onSubmit={} method="post">
                        <TextField
                            label="Paste URL Here"
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
                    </Form>
                </Layout>
            </Card>
            </Page>
        </Frame>
        
        );
    }  
}