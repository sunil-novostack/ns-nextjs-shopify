import React,{Component} from 'react';
import NarvigationBar from '../components/NavigationBar';


export default class StoreProducts extends Component{
  render(){
    return (
      <Frame
          navigation={NarvigationBar}
      >
              <Page title={<Heading>Store Products</Heading>} fullWidth>
                <Card sectioned>
                  <Layout>
                  </Layout>
                </Card>                  
              </Page>
      </Frame>
    );
  }  
}