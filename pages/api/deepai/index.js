import axios from 'axios';

export default async (req,res) => {
    //const deepai = require('deepai');
    //deepai.setApiKey('257b469d-4d3f-4cbd-b834-3a98d4df40ae');
    const {method,query} = req;
    switch(method){
        case 'GET':
            try{           
                res.status(200).json({success:true})
            }catch(error){
                res.status(error.response.status).json({success:false,response})
            }
            break;
        case 'POST':
            try{
                const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
                deepai.setApiKey('257b469d-4d3f-4cbd-b834-3a98d4df40ae');                
                const response = await deepai.callStandardApi("text-generator", {
                    text: req.body.text,
                });
                console.log(response)
                res.status(200).json({success:true,data:response})
                
            }catch(error){
                console.log(error.response)
                res.status(error.response.status).json({success:false,error:error.response})
            }
            break;
        default:
            res.status(400).json({success:false})
            break;
    }
}