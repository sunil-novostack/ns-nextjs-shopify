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

export default class CrawlUrl extends Component{
    constructor(props) {
        super(props)  
        this.state = {
            searchUrl:'',
            selectedEcom:['ebay'],
            fetchedProduct:null,
            foundProduct:false,
        }
    }

    handleSearchChange = (value) =>{this.setState({searchUrl:value})}
    handleChangeEcom = (value) => {this.setState({selectedEcom:value})}
    handleFecthProductSubmit = async (_event) => {
        /*
        const response = await axios({
            url : '/detail',
            method:'post',
            baseURL:'http://204.44.125.73:8000/data',
            params:{
                url:searchUrl,
                ecom:selectedEcom[0]
            }
        });
        
        console.log(response)
        */
        this.setState({foundProduct:true})
        this.setState({
            fetchedProduct : {
                title:'This is product title',
                description:'This will be default product description if any',
                image:'https://cdn.shopify.com/s/files/1/0532/5062/1627/products/city-woman-fashion_925x_2x_ee873798-6f63-4d75-932d-297a182d9047_350x350.jpg?',
                price:'125.00',
            }
        })
        firebase.firestore().collection('sunil-novostack.myshopify.com').doc().set(
            {
                title:'This is product title',
                description:'This will be default product description if any',
                image:'https://cdn.shopify.com/s/files/1/0532/5062/1627/products/city-woman-fashion_925x_2x_ee873798-6f63-4d75-932d-297a182d9047_350x350.jpg?',
                price:'125.00',
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        )
        
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
                                        {label: 'Ebay', value: 'ebay'},
                                        {label: 'Sams', value: 'sams'},
                                        {label: 'Boscovs', value: 'boscovs'},
                                        {label: 'Home', value: 'home'},
                                        {label: 'BedBath', value: 'bedbath'},
                                        {label: 'WalMart', value: 'walmart'}
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
                            title={this.state.fetchedProduct.title}
                            primaryAction={{
                                content: 'Import It',
                                onAction: () => {},
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
                                src={this.state.fetchedProduct.image}
                            />
                            <div className="product-price">Price : $ {this.state.fetchedProduct.price}</div>
                            </div>
                        </MediaCard>
                        </Layout.Section>
                    </Layout>

                    : <div>not fount</div>

                    }
                    </FormLayout>              
                </Form>
        );
    }
     
    
}