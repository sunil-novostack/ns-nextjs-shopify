/*
import dbConnect from '../../../lib/mongoose/dbConnect';
import Product from '../../../lib/mongoose/Product';

dbConnect();
*/

import {connectToDatabase} from '../../../lib/mongoose/dbCon';

export default async (req,res) => {
    const {db} = await connectToDatabase();
    const {method,headers,query} = req;
    switch(method){
        case 'GET':
            try{
                const limit = parseInt(await query.limit);
                const skip = await ( parseInt(query.page) - 1) * limit;        
                const response = await db.collection(headers.shopname).find()
                .skip(skip)
                .limit(limit)
                .toArray();
                
                res.status(200).json({success:true,products:response})
            }catch(error){
                res.status(400).json({success:false})
            }
            break;
        case 'POST':
            try{
                //const product = await Product.create(req.body)
                const response = await db.collection(headers.shopname).insertOne(req.body)
                res.status(201).json({success:true,data:response})
            }catch(error){
                res.status(400).json({success:false,error:error})
            }
            break;
        default:
            res.status(400).json({success:false})
            break;
    }
}