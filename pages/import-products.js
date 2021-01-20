import React,{Component} from 'react';
import {
  Page,
  Heading,
  Frame,
  Layout,
  Card,
  DataTable,
  Thumbnail,
  ResourceList,
  TextStyle,
  Button,
} from '@shopify/polaris';
import Router from 'next/router';
import firebase  from '../lib/db/Firebase';
import NarvigationBar from '../components/NavigationBar';


export default class Importproducts extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             items:[]
        }
    }
    
    componentDidMount(){
        
        firebase.auth().onAuthStateChanged( async (user)=>{
            if(!user){
                Router.push('/signin')
            }
        })
        const firedb = firebase.firestore()
        let products = [];
        firedb.collection('sunil-novostack.myshopify.com')
        .get()
        .then((querySnapshot) => {            
            querySnapshot.forEach((doc) => {                
               products.push(doc.data())
            })
            this.setState({items:products})
        })
        /*
        const tempitems = []
        products.get().then((querySnapshot) => {            
            querySnapshot.forEach((doc) => {                
               tempitems.push(doc.data())
            })
        })
        */        
    }

    render(){        
        return(
            <Frame
                navigation={NarvigationBar}
            >
            <Page title={<Heading>Imported Products</Heading>} fullWidth>
                <Card sectioned>
                    <div className="product-list-items">
                        {
                            /*
                            this.state.items.then((querySnapshot) => {            
                                querySnapshot.forEach((doc) => {
                                    const product = doc.data()             
                                    return(
                                        <div className="product-item">
                                            <div className="image-holder">
                                                <img src="https://cdn.shopify.com/s/files/1/0532/5062/1627/products/city-woman-fashion_925x_2x_ee873798-6f63-4d75-932d-297a182d9047_350x350.jpg" width="100%" height="100%"></img>
                                            </div>
                                            <div className="item-bottom">
                                                <h2 className="item-title">{product.title}</h2>
                                                <h2 className="item-price">US $ 20.00</h2>
                                                <Button name="importtostore" submit="false" primary={true} size="slim">Import To Store</Button>
                                            </div>
                                        </div>
                                    )
                                })
                            })
                            */
                            
                            this.state.items.map( (product,index)=>{
                                return(
                                    <div className="product-item" id={"item-"+index}>
                                        <div className="image-holder">
                                            <img src={product.image} />                                         
                                        </div>
                                        <div className="item-bottom">
                                            <h2 className="item-title">{product.title}</h2>
                                            <h2 className="item-price">US $ {product.price}</h2>
                                            <Button name="importtostore" submit="false" primary={true} size="slim">Import To Store</Button>
                                        </div>
                                    </div>
                                )
                            })
                        
                        }
                         

                    </div>
                </Card>
            </Page>
            </Frame>
        );
    }
}