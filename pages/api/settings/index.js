/*
import dbConnect from '../../../lib/mongoose/dbConnect';
import Product from '../../../lib/mongoose/Product';

dbConnect();
*/

import { set } from 'js-cookie';
import {connectToDatabase} from '../../../lib/mongoose/dbCon';

export default async (req,res) => {
    const {db} = await connectToDatabase();
    const {method,headers,query} = req;
    switch(method){
        case 'GET':
            try{      
                const response = await db.collection(headers.shopname+'.settings').findOne()
                res.status(200).json({success:true,settings:response})
            }catch(error){
                res.status(400).json({success:false})
            }
            break;
        case 'POST':
            try{ 
                console.log(req.body)
                if(req.body._id){          
                    const response = await db.collection(headers.shopname+'.settings').update(
                        {_id:req.body._id},
                        {$set: {priceRules: req.body.priceRules}}
                    )
                    res.status(201).json({success:true,data:response})
                }else{
                    const response = await db.collection(headers.shopname+'.settings').insertOne(req.body)
                    res.status(201).json({success:true,data:response})
                }
            }catch(error){
                res.status(400).json({success:false,error:error})
            }
            break;
        default:
            res.status(400).json({success:false})
            break;
    }
}