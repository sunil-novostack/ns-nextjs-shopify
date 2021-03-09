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
                });

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
                
            }catch(error){
                console.log(error)
                res.status(400).json({success:false})
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