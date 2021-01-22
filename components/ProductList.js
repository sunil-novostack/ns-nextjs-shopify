import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Card, ResourceList, Stack, TextStyle, Thumbnail } from '@shopify/polaris';
//import store from 'store-js';


const GET_FIRST_PRODUCTS = gql`
query getProducts($row:Int!){
  products(first: $row) {
    edges {
      cursor
      node {
        id
        title
        variants(first:1){
          edges{
            node{
              price
            }
          }
        }
        priceRangeV2{
          minVariantPrice{
            amount
            currencyCode
          }
        }
        images(first:1){
          edges{
            node{
              id
              originalSrc
              altText
              width
              height
              transformedSrc
            }
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
`;

function ProductList (){

    const {loading, error, data} = useQuery(GET_FIRST_PRODUCTS, { variables: { row: 20 } });
    if (loading) return <div>loading...</div>
    if (error) return <div>{error.message}</div>
    
    console.log('stored products',data);    
    return(
        <Card>
          
        </Card>
    )
}
export default ProductList;