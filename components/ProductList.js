import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Card, ResourceList, Stack, TextStyle, Thumbnail } from '@shopify/polaris';
//import store from 'store-js';


const GET_PRODUCTS_BY_ID = gql`
query getProduct($id:ID!){
  product(id: $id){
    id
    title
    description
  }
}
`;

function ProductList (){

    const {loading, error, data} = useQuery(GET_PRODUCTS_BY_ID, { variables: { id: 'gid://shopify/Product/6186797433019' } });
    if (loading) return <div>loading...</div>
    if (error) return <div>{error.message}</div>
    
    console.log('stored products',data);
    
    return(
        <Card>
        </Card>
    )
}
export default ProductList;