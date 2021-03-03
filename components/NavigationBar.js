import React,{ Component } from 'react';
import { 
    Navigation
} from '@shopify/polaris';
import Router from 'next/router';
import firebase  from '../lib/db/Firebase';
import { FaItchIo,FaShoppingCart,FaCartArrowDown } from 'react-icons/fa';
import { IoMdSettings,IoMdLogOut } from "react-icons/io";


export default class NavigationBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            dashboard: props.dashboard ? props.dashboard : false,
            importProducts: props.importProducts ? props.importProducts : false,
            storeProducts: props.storeProducts ? props.storeProducts : false,
            settings: props.settings ? props.settings : false,
            settingGeneral: props.settingGeneral ? props.settingGeneral : false,
            settingPricingRule: props.settingPricingRule ? props.settingPricingRule : false,
        }        
    }
    render(){
        return(
            <Navigation location="/">            
            <Navigation.Section
                items={[
                    {
                        label: 'Dashboard',
                        icon: FaItchIo,
                        url:'/dashboard',
                        selected:this.state.dashboard
                    },
                    {
                        label: 'Import Products',
                        icon: FaCartArrowDown,
                        url:'/import-products',
                        selected:this.state.importProducts
                    },
                    {
                        label: 'Store Products',
                        icon: FaShoppingCart,
                        url:'/store-products',
                        selected:this.state.storeProducts
                    },
                    {
                        label: 'Setting',
                        icon: IoMdSettings,
                        url:'/settings',
                        selected: this.state.settings,
                        subNavigationItems:[
                            {
                                label:'General',
                                url:'/settings/general',
                                selected:this.state.settingGeneral
                            },
                            {
                                label:'Price Rules',
                                url:'/settings/price-rules',
                                selected:this.state.settingPricingRule
                            }
                        ]                        
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
        )
    }
}
