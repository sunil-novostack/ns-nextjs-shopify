/*
import dbConnect from '../../../lib/mongoose/dbConnect';
import Product from '../../../lib/mongoose/Product';

dbConnect();
*/

import {connectToDatabase} from '../../../lib/mongoose/dbCon';

export default async (req,res) => {
    const {db} = await connectToDatabase();
    const {method,headers} = req;
    switch(method){
        case 'GET':
            try{
                const products = await Product.find({})
                res.status(200).json({success:true,data:products})
            }catch(error){
                res.status(400).json({success:false})
            }
            break;
        case 'POST':
            try{
                //const product = await Product.create(req.body)
                const response = await db.collection(headers.shopname).insert(req.body)
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