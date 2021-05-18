import Axios from 'axios';
export default async (req,res) => {
    const {method,headers,query} = req;
    switch(method){
        case 'GET':
            try{
                const response = await Axios({
                    url: "/themes.json",
                    method: "GET",
                    baseURL:'https://'+headers.shopname+'/admin/api/2021/04',
                })
                console.log(response)
                //res.status(200).json({success:true,products:response})
            }catch(error){
                console.log(error)
                //res.status(400).json({success:false,response:error})
            }
            break;
        case 'POST':
            
            break;
        default:
            res.status(400).json({success:false})
            break;
    }
}