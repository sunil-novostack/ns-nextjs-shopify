import axios from 'axios';
import cheerio from 'cheerio';

export default async (req,res) => {
    const {method,query} = req;
    switch(method){
        case 'GET':
            try{
                
                const response = await axios({
                  headers: {
                    "x-api-key": "0c63e893-4bc0-44ca",
                  },
                  url: "/detail",
                  method: "get",
                  baseURL:'https://ecomapp.io/data',
                  params: {
                    url: query.url,
                    ecom: query.ecom,
                    product_id: 0,
                    db_entry: 0,
                  },
                }).then( async (response) => {
                    console.log(response)
                    if(response.data){
                        const product = await {
                            title : response.data.items[0].product_name,
                            description : '',
                            images : response.data.items[0].images,
                            items : [],
                            options : []
                        }
                        const options = await []
                        if(response.data.has_variations){
                            //if we got product with variations
                            Promise.all(                            
                                response.data.items.map( (item,i) =>{
                                    item.image = []
                                    item.options= []
                                    item.name = item.product_name +' - '
                                    response.data.items[i].modifiers.map( (modifier,m)=>{
                                        item.name += modifier.value
                                        item.options.push(modifier.value)
                                        if(m < (response.data.items[i].modifiers.length-1)){
                                            item.name +=' / '
                                        }
                                        if(i<=0){
                                            product.options.push({
                                                name:modifier.name,
                                                position:m,
                                                values:[modifier.value]
                                            })
                                        }
                                    })                                                           
                                    response.data.items[i] = item
                                })                                                
                            ).then(()=>{
                                
                                Promise.all(
                                    response.data.items.map( (item,i) =>{
                                        response.data.items[i].modifiers.map(async (modifier,m)=>{
                                            if(i>0){      
                                                if(!product.options[m].values.includes(modifier.value)){
                                                    product.options[m].values.push(modifier.value)
                                                }                                            
                                            }
                                        })
                                    })
                                )
                                Promise.all(
                                    response.data.items.map( (item,i) =>{     
                                        delete item.modifiers                               
                                        response.data.items[i].images.map(async (image,im)=>{
                                            if(!response.data.images.includes(image)){
                                                response.data.items[i].image.push(image)
                                            }
                                        })
                                    })
                                )
                                Promise.all(
                                    response.data.items.map( (item,i) =>{     
                                        delete item.images
                                        delete item.product_name
                                    })
                                )

                                product.items = response.data.items
                                res.status(200).json({success:true,product:product})
                            }).catch((error)=>{

                                console.log(error)
                                res.status(error.response.status).json({success:true,data:error.response})
                            })

                        }else{

                            //if we got single product with out variations
                            Promise.all(                            
                                response.data.items.map( (item,i) =>{
                                    item.image = []
                                    item.options= []
                                    item.name = item.product_name                              
                                    response.data.items[i] = item
                                })                                                
                            ).then(()=>{
                                Promise.all(
                                    response.data.items.map( (item,i) =>{     
                                        delete item.modifiers                               
                                        response.data.items[i].images.map(async (image,im)=>{
                                            if(!response.data.images.includes(image)){
                                                response.data.items[i].image.push(image)
                                            }
                                        })
                                    })
                                )
                                Promise.all(
                                    response.data.items.map( (item,i) =>{     
                                        delete item.images
                                        delete item.product_name
                                    })
                                )
                                product.items = response.data.items
                                res.status(200).json({success:true,product:product})
                            })
                            
                        }
                    }                    
                })
                
                //console.log(response.data)
                
                /*
                if(Array.isArray(response.data) && response.data.length>0){
                    const variants = []
                    Promise.all(
                        response.data.map( async (variant)=>{
                            variants.push({
                                name : variant.modifiers,
                                price: variant.product_price,
                            })
                        })
                    )
                    
                    const prodObj = await{
                        title: response.data[0].product_title,
                        description: response.data[0].description ? response.data.description : '',
                        price:response.data[0].product_price,
                        images:response.data[0].images,
                        sourceUrl:response.data[0].product_url,
                        source:query.ecom,
                        variants:variants,
                    }
                    
                    res.status(200).json({success:true,productDetail:prodObj})
                }else if(!Array.isArray(response.data)){
                    const prodObj = await {
                        title: response.data.product_title,
                        description: response.data.description ? response.data.description : '',
                        price:response.data.product_price,
                        images:response.data.images,
                        sourceUrl:response.data.product_url,
                        source:query.ecom,
                        variants:false,
                    }
                    res.status(200).json({success:true,productDetail:prodObj})
                }else{
                    res.status(200).json({success:true,productDetail:null})
                }
                */
               
            }catch(error){
                //console.log(error)
                res.status(error.response.status).json({success:false,error:error.response})
            }
            break;
        case 'POST':
            try{
                const product = {}

                res.status(201).json({success:true,data:product})

            }catch(error){
                res.status(400).json({success:false})
            }
            break;
        default:
            res.status(400).json({success:false})
            break;
    }
}