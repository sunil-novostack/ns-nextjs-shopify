import axios from 'axios';
import cheerio from 'cheerio';

export default async (req,res) => {
    const {method,query} = req;
    switch(method){
        case 'GET':
            try{
                /*
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
                */
                const {response} = await axios.get(query.url)
                const $ = cheerio.load(response)
                let images = [];
                $('.slider-frame .slider-list li').each((i,li) => {
                    let img = $(li).find('img').attr('src')
                    let image = img.match(/.*?[?!.]/g);
                    images.push(image[0])
                })
                const products = {
                    product_title : $('h1.prod-ProductTitle').text(),
                    description:$('div.about-product-standard').html(),
                    product_price:$('.prod-PriceHero span.price-characteristic').text(),
                    currency:{
                        currency_type:$('.prod-PriceHero span.price-currency').attr('content'),
                        currency_sign:$('.prod-PriceHero span.price-currency').text()
                    },
                    images:images
                }
                res.status(200).json({success:true,productDetail:products})
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