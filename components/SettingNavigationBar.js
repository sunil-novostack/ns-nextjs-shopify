import React from 'react';
import { 
    Navigation
} from '@shopify/polaris';
import { FaItchIo,FaCartArrowDown } from 'react-icons/fa';

const  NarvigationBar = (
            <Navigation location="/">            
            <Navigation.Section
                items={[
                    {
                        label: 'General',
                        icon: FaItchIo,
                        url:'/general',
                    },
                    {
                        label: 'Pricing Rules',
                        icon: FaCartArrowDown,
                        url:'/pricing-rules'
                    },
                ]}
            />
            </Navigation>
        );
export default NarvigationBar;
