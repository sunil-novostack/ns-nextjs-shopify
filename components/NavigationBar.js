import React,{ Component } from 'react';
import { 
    Navigation
} from '@shopify/polaris';
import Router from 'next/router';
import firebase  from '../lib/db/Firebase';
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
                        onClick:function(){
                            firebase.auth().signOut().then(function() {
                                //Cookies.set('nsns',false);
                                Router.push('/signin')
                            }, function(error) {
                            console.error('Sign Out Error', error);
                            });
                        }
                    },
                ]}
            />
            </Navigation>
        );
export default NarvigationBar;
