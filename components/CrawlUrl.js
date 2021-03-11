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
    handleFecthProductSubmit = async (_event) => {
        this.setState({
            isLoading:true,
        })
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
            response.data.productDetail!=null
            ?
                this.setState({
                    foundProduct:true,
                    fetchedProduct : response.data.productDetail,
                    isLoading:false,
                })

            :
                this.setState({
                    foundProduct:false,
                    isLoading:false,
                    msg:'No Product data found on given product page link',
                })
        })        
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
                                <TextField name="title" label="Product Title" value={this.state.fetchedProduct.title} onChange={this.handleTitleChange} />
                                <Layout>
                                    <Layout.Section secondary>
                                        {this.state.fetchedProduct.images[0]
                                        ?
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
                                        :
                                            ''
                                        }
                                    </Layout.Section>
                                    <Layout.Section>
                                       <table width="100%">
                                            <tr>
                                                <th>Name</th>
                                                <th>Size</th>
                                                <th>Color</th>
                                                <th>Price</th>
                                                <th>Margin</th>
                                                <th>final Price</th>
                                                <th>Qty</th>
                                            </tr>
                                            {this.state.fetchedProduct.variants
                                            ?
                                                this.state.fetchedProduct.variants.map((variant,index) => {
                                                    return(
                                                        <tr>
                                                            <td>{variant.name}</td>
                                                            <td>None</td>
                                                            <td>None</td>
                                                            <td>{variant.price}</td>
                                                            <td><TextField name="variant_price_margin"/></td>
                                                            <td><TextField name="variant_final_price"/></td>
                                                            <td>None</td>
                                                        </tr>
                                                    )
                                                })
                                            :
                                                ''
                                            }
                                       </table>                  
                                    </Layout.Section>
                                </Layout>
                                <Layout>
                                    <Layout.Section>
                                    </Layout.Section>
                                </Layout>
                            </Card>
                        <MediaCard
                            title={this.state.fetchedProduct.title}
                            primaryAction={{
                                content: 'Add To List',
                                onAction: () => { this.handleAddProduct() },
                                loading:this.state.isLoading ? true : false,
                                primary:true,
                            }}
                            secondaryAction={{
                                content:'Edit Before [Add To List]',
                                onAction: () => { this.handleEditProduct() },
                                loading:this.state.isLoading ? true : false
                            }}
                            description={ 
                                    <div className="variations">
                                        <div className="variation-list">                                    
                                        {this.state.fetchedProduct.variants
                                            ?
                                                this.state.fetchedProduct.variants.map( (variant,index) => {
                                                    return(
                                                    <div className="v-item" key={index}>
                                                        <div className="image-holder">
                                                            <svg viewBox="0 0 20 20">
                                                                <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v15A1.5 1.5 0 0 0 2.5 19h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 17.5 1h-15zm5 3.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM16.499 17H3.497c-.41 0-.64-.46-.4-.79l3.553-4.051c.19-.21.52-.21.72-.01L9 14l3.06-4.781a.5.5 0 0 1 .84.02l4.039 7.011c.18.34-.06.75-.44.75z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="variation-props">
                                                            <p><span>{variant.name}</span></p>
                                                            <p><span>{variant.price}</span></p>
                                                        </div>
                                                    </div>
                                                    )
                                                })                                                                                       
                                            :
                                                'No variation'
                                        }
                                        </div>
                                    </div>
                                }
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
                            <div className="product-price">Price : {this.state.fetchedProduct.price}</div>
                            </div>
                        </MediaCard>
                        </Layout.Section>
                    </Layout>

                    : 
                        <Banner icon={IoIosInformationCircle} title="Product fetch">
                            <p>{this.state.msg}</p>
                        </Banner> 
                    }
                    
                    </FormLayout>              
                </Form>
        );
    }
     
    
}