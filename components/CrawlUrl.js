import React,{ Component } from 'react';
import { 
    Layout,
    Card,
    Form,
    FormLayout,
    TextField,
    Button,
    ChoiceList,
    MediaCard,
} from '@shopify/polaris';
import firebase  from '../lib/db/Firebase';
import axios from 'axios';
import Cookies from 'js-cookie';

export default class CrawlUrl extends Component{
    constructor(props) {
        super(props)  
        this.state = {
            searchUrl:'',
            selectedEcom:['Ebay'],
            fetchedProduct:null,
            foundProduct:false,
        }
    }

    handleSearchChange = (value) =>{this.setState({searchUrl:value})}
    handleChangeEcom = (value) => {this.setState({selectedEcom:value})}
    handleFecthProductSubmit = async (_event) => {
               
         
        
        const response = await axios({
            url : '/api/scrap-product-detail?',
            method:'GET',
            params:{
                url:this.state.searchUrl,
                ecom:this.state.selectedEcom[0],
                product_id:0,
                db_entry:0,
            }
        })
        
        console.log(response)
        const productDetails = await response.data.productDetail
        this.setState({
            foundProduct:true,
            fetchedProduct : productDetails
        })
        /*
        
        //inserting product into firebase firestore
        firebase.firestore().collection('sunil-novostack.myshopify.com').doc().set(
            {
                title:'This is product title',
                description:'This will be default product description if any',
                image:'https://cdn.shopify.com/s/files/1/0532/5062/1627/products/city-woman-fashion_925x_2x_ee873798-6f63-4d75-932d-297a182d9047_350x350.jpg?',
                price:'125.00',
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        ) 
        */
        
    }
    handleAddProduct = async (_event) => {
        console.log(this.state.fetchedProduct)
    }
    addProduct = async () =>{
        try{
            const token = Cookies.get('shopAccessToken')
            const response = await axios({
                headers: {
                    "Access-Control-Allow-Origin": "*"                    
                } ,
                url:'/products',
                method:'post',
                baseURL:'https://4f677f5d50f9.ngrok.io/api',
                params:this.state.fetchedProduct
            })
            console.log(response)
        }catch(error){
            console.log(error)
        }
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
                                    title="ECOM"
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
                                    />
                                    <Button icon="" primary={true} name="fetchproduct" submit="true">Extract</Button>                    
                        </Card>
                    </Layout.AnnotatedSection>
                    {this.state.foundProduct
                    ?
                    
                    <Layout sectioned={true}>
                        <Layout.Section>
                        <MediaCard
                            title={this.state.fetchedProduct.product_title}
                            primaryAction={{
                                content: 'Add Product',
                                onAction: () => { this.handleAddProduct() },
                            }}
                            description={this.state.fetchedProduct.description}
                            size="small"
                        >
                            <div className="image-holder">
                            <img
                                alt=""
                                width="100%"
                                height="100%"
                                style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                }}
                                src={this.state.fetchedProduct.images[0]}
                            />
                            <div className="product-price">Price : {this.state.fetchedProduct.product_price}</div>
                            </div>
                        </MediaCard>
                        </Layout.Section>
                    </Layout>

                    : 
                    <Layout sectioned>
                        <Layout.Section>
                                <p>Please Pass Right Url to Fetch Product data...</p>
                        </Layout.Section>
                    </Layout>

                    }
                    </FormLayout>              
                </Form>
        );
    }
     
    
}