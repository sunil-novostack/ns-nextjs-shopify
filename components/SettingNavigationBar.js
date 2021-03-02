import React,{ Component } from 'react';
import { 
    Navigation
} from '@shopify/polaris';
import { FaItchIo,FaShoppingCart,FaCartArrowDown } from 'react-icons/fa';

const  NarvigationBar = (
            <Navigation location="/settings">            
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
