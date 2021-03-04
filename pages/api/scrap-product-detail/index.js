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
                if(Array.isArray(response.data)){
                    const prodObj = await{

                    }
                }else{
                    const prodObj = await {
                        title: response.data.product_title,
                        description: response.data.product_title ? response.data.product_title : '',
                        price:response.data.product_price,
                        images:response.data.images,
                        sourceUrl:response.data.product_url,
                        source:query.ecom,
                    }
                }
                res.status(200).json({success:true,productDetail:prodObj})
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