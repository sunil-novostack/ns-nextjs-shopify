import {MongoClient} from 'mongodb';

const {SHOPIFY_MONGO_URI,SHOPIFY_MONGO_DB} = process.env
let cached = global.mongo

if(!cached){
    cached = global.mongo = { conn :null,promise:null }
}

export async  function connectToDatabase(){
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        const opts = {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }

        cached.promise = MongoClient.connect(SHOPIFY_MONGO_URI,opts).then((client) => {
            return {
                client,
                db:client.db(SHOPIFY_MONGO_DB)
            }
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}