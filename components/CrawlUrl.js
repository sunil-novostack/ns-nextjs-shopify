import React,{ Component, createRef } from 'react';
import { 
    Layout,
    Card,
    Form,
    FormLayout,
    TextField,
    Button,
    ChoiceList,
    MediaCard,
    Banner,
    DataTable,
    Checkbox,
} from '@shopify/polaris';
import axios from 'axios';
import Cookies from 'js-cookie';
import {IoIosInformationCircle} from "react-icons/io";

export default class CrawlUrl extends Component{
    constructor(props) {
        super(props)  
        this.state = {
            searchUrl:'',
            selectedEcom:['Ebay'],
            fetchedProduct:null,
            foundProduct:false,
            isLoading:false,     
            msg:'Please copy past product page into url field and press extract button',
            priceRules : {
                pricehikeconditional:'*',
                productPriceHike:'2',
            },
            finalPrice:0,
            productTitle:'',
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
                response.data.settings
                ? 
                    this.setState({
                        priceRules:response.data.settings.priceRules
                    })
                :
                    this.setState({
                        priceRules : {
                            pricehikeconditional:'*',
                            productPriceHike:'2',
                        }
                    })
            })
        }catch(error){
            console.log(error)
        }
    }

    handleSearchChange = (value) =>{this.setState({searchUrl:value})}
    handleChangeEcom = (value) => {
        this.setState({selectedEcom:value})
        this.setState({searchUrl:''})
    }
    handleTitleChange = (value) => {
        this.setState({
            fetchedProduct:{
                ...this.state.fetchedProduct,
                title:value,
            }
        })
    }
    handleFinalPrice = (value) => {
        console.log(value)
    }
    handleFecthProductSubmit = async (_event) => {
        this.setState({
            isLoading:true,
        })
        try{
            const response = await axios({
                url : '/api/scrap-product-detail?',
                method:'GET',
                params:{
                    url:this.state.searchUrl,
                    ecom:this.state.selectedEcom[0],
                    product_id:0,
                    db_entry:0,
                }
            }).then((response) =>{
                //console.log(response)
                if(response.data!=null){            
                    this.setState({
                        foundProduct:true,
                        fetchedProduct : response.data.product,
                        isLoading:false,
                    })
                }else{
                    this.setState({
                        foundProduct:false,
                        isLoading:false,
                        msg:'No Product data found on given product page link',
                    })
                }
                {console.log(response.data.product)}
                /*
                if(response.data.productDetail!=null){            
                    if(response.data.productDetail.variants){
                        const items = [];
                        Promise.all(
                            response.data.productDetail.variants.map((variant,index) => {
                                if(variant.price==null){
                                    variant.price = 0
                                }else{
                                variant.price = variant.price.toString().replace('$','')
                                }
                                variant.finalPrice = (Number( this.state.priceRules.productPriceHike ) * parseFloat( variant.price))
                                if(!variant.qty){variant.qty=0}
                                items.push(variant)
                            })
                        );                    
                        response.data.productDetail.variants = items
                        console.log(response.data.productDetail)
                        this.setState({
                            foundProduct:true,
                            fetchedProduct : response.data.productDetail,
                            isLoading:false,
                        })
                    }
                }else{
                    this.setState({
                        foundProduct:false,
                        isLoading:false,
                        msg:'No Product data found on given product page link',
                    })
                }
                */
            })
        }catch(error){
            console.log(error)
            this.setState({
                isLoading:false,
            })
        }
    }
    handleAddProduct = async (_event) =>{
        //console.log(this.state.fetchedProduct)
        this.setState({
            isLoading:true,
        })
        try{
            const response = await axios({
                headers:{
                    'shopname':Cookies.get('shopOrigin')
                },
                url:'/api/products',
                method:'post',
                data:this.state.fetchedProduct
            }).then((response) =>{
                console.log(response)
                this.setState({
                    isLoading:false,
                })
            })
            //console.log(response)
        }catch(error){
            console.log(error)
        }
    }
    handleEditProduct = async (_event) => {
        console.log('popup')
    }

    render(){
        return(
            
                <Form name="product-fetch-form" onSubmit={this.handleFecthProductSubmit} method="post">
                    <FormLayout>
                    <Layout.AnnotatedSection
                        title="Extract Product"
                        description="With the help of scrap url you can get product from here to your shop"
                    >
                        <Card sectioned>                            
                            <ChoiceList
                            choices={[
                                {label: 'Ebay', value: 'Ebay'},
                                {label: 'Sams Club', value: 'SamsClub'},
                                {label: 'Boscovs', value: 'Boscovs'},
                                {label: 'Home Depot', value: 'HomeDepot'},
                                {label: 'Bed Bath', value: 'BedBathandBeyond'},
                                {label: 'WalMart', value: 'Walmart'},
                                {label: 'CostCo', value: 'CostCo'}
                            ]}
                            name="ecom"                            
                            selected={this.state.selectedEcom}
                            onChange={this.handleChangeEcom}
                            />
                            <TextField
                                label="Paste URL Here"
                                name="searchUrl"
                                type="text"
                                value={this.state.searchUrl}
                                onChange={this.handleSearchChange}
                                connectedRight={
                                    <Button loading={this.state.isLoading ? true : false } primary={true} name="fetchproduct" submit="true">
                                        Extract
                                    </Button>
                                }
                            />                            
                        </Card>
                    </Layout.AnnotatedSection>
                    {this.state.foundProduct
                    ?                    
                    <Layout sectioned={true}>                        
                        <Layout.Section>
                            <Card sectioned>
                                <TextField name="title" label="Product Title" value={this.state.fetchedProduct.items[0].product_name} onChange={this.handleTitleChange} />
                                <Layout>
                                    <Layout.Section secondary>
                                        {this.state.fetchedProduct.items
                                        ?
                                            <img
                                            alt=""
                                            width="100%"
                                            height="100%"
                                            style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                            }}
                                            src={this.state.fetchedProduct.items[0].images[0]}
                                            />
                                        :
                                            ''
                                        }
                                    </Layout.Section>
                                    <Layout.Section>
                                        <div className='variant-table'>
                                            <table width="100%">
                                                <tr>
                                                    <th>SKU</th>
                                                    
                                                    {this.state.fetchedProduct.has_variations
                                                    ?                                                    
                                                        this.state.fetchedProduct.items[0].modifiers.map((variant,index) => {
                                                            return(
                                                                <th align="left">{variant.name}</th>
                                                            )                                                                    
                                                        })
                                                    :
                                                        ''
                                                    }
                                                    <th>Price</th>
                                                    <th>Margin</th>
                                                    <th>Final Price</th>
                                                    <td>Unites</td>                                                
                                                </tr>
                                                
                                                {this.state.fetchedProduct.items
                                                ?                                                    
                                                    this.state.fetchedProduct.items.map((variant,index) => {
                                                        
                                                        if(this.state.priceRules.pricehikeconditional=='*'){
                                                            variant.finalPrice = (Number( this.state.priceRules.productPriceHike ) * parseFloat( variant.price))
                                                        }else if(this.state.priceRules.pricehikeconditional=='+'){
                                                            variant.finalPrice = (Number( this.state.priceRules.productPriceHike ) + parseFloat( variant.price))
                                                        }                                
                                                        return(
                                                            <tr>
                                                                <td>{variant.sku}</td>
                                                                {this.state.fetchedProduct.has_variations
                                                                ?
                                                                    variant.modifiers.map((modifier,i) => {
                                                                        return(
                                                                            <td>{modifier.value}</td>
                                                                        )                                                                    
                                                                    })
                                                                :
                                                                    ''
                                                                }
                                                                <td>$ {variant.price}</td>
                                                                <td>{this.state.priceRules.pricehikeconditional} {this.state.priceRules.productPriceHike}</td>
                                                                
                                                                <td>
                                                                    <TextField
                                                                        name="finalPrice"
                                                                        type="text"
                                                                        value={variant.finalPrice}
                                                                        onChange={this.handleFinalPrice}
                                                                    />
                                                                </td>
                                                                <td> 0 </td>
                                                            </tr>                                                            
                                                        )
                                                    })                                                    
                                                :
                                                    'No Variant available'
                                                }
                                                
                                            </table>
                                        </div>                  
                                    </Layout.Section>
                                </Layout>
                            </Card>                        
                        </Layout.Section>
                    </Layout>
                    
                    : 
                        <Layout>
                            <Layout.Section>
                                <Banner icon={IoIosInformationCircle} title="Product fetch">
                                    <p>{this.state.msg}</p>
                                </Banner>
                            </Layout.Section>
                        </Layout> 
                    }
                    
                    </FormLayout>              
                </Form>
        );
    }
     
    
}