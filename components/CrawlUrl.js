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
     
    return(
            <Layout.AnnotatedSection
                title="Extract Product"
                description="With the help of scrap url you can get product from here to your shop"
            >
                <Card sectioned>
                    <Form>
                        <FormLayout>
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