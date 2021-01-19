import React,{ Component } from 'react';
import { 
    Navigation
} from '@shopify/polaris';

import { FaItchIo,FaShoppingCart,FaCartArrowDown } from 'react-icons/fa';
import { IoMdSettings,IoMdLogOut } from "react-icons/io";

const  NarvigationBar = (
            <Navigation location="/">            
            <Navigation.Section
                items={[
                {
                    label: 'Dashboard',
                    icon: FaItchIo,
                    url:'/dashboard',
                },
                {
                    label: 'Store Products',
                    icon: FaShoppingCart,
                },
                {
                    label: 'Import Products',
                    icon: FaCartArrowDown,
                },
                {
                    label: 'Setting',
                    icon: IoMdSettings,
                },
                {
                    label: 'Signout',
                    icon: IoMdLogOut,
                    url:'/signout',
                },
                ]}
            />
            </Navigation>
        );
export default NarvigationBar;
