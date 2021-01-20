import React,{ useState,useCallback } from 'react';
import {
    Input,
} from 'react-dom';

import { 
    Layout,
    Card,
    Form,
    FormLayout,
    TextField,
    Button,
} from '@shopify/polaris';

export default function CrawlUrl(){
    const [searchUrl,setSearchUrl] = useState('');
    const handleSearchChange = useCallback((value) => setSearchUrl(value),[],);
    const [selectedEcom, setSelectedEcom] = useState(['hidden']);
    const handleChangeEcom = useCallback((value) => setSelectedEcom(value), []);
     
    return(
            <Layout.AnnotatedSection
                title="Extract Product"
                description="With the help of scrap url you can get product from here to your shop"
            >
                <Card sectioned>
                    <Form>
                        <FormLayout>
                            <ChoiceList
                            title="ECOM"
                            choices={[
                                {label: 'Ebay', value: 'ebay'},
                                {label: 'Sams', value: 'sams'},
                                {label: 'Boscovs', value: 'boscovs'},
                                {label: 'Home', value: 'home'},
                                {label: 'BedBath', value: 'bedbath'},
                                {label: 'WalMart', value: 'walmart'}
                            ]}
                            name="ecom"
                            selected={selectedEcom}
                            onChange={handleChangeEcom}
                            />
                            <TextField
                                label="Past URL"
                                name="searchUrl"
                                type="text"
                                value={searchUrl}
                                onChange={handleSearchChange}
                            />
                            <Button icon="" primary={true}>Extract</Button>
                        </FormLayout>
                    </Form>
                </Card>
            </Layout.AnnotatedSection>
    );
}