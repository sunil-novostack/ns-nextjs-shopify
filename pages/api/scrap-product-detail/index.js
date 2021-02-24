import axios from 'axios';

export default async (req,res) => {
    const {method,query} = req;
    console.log(query)
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

                console.log(response);
                const products = {}
                res.status(200).json({success:true,productDetail:response})
            }catch(error){
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