import * as React from "react";
import {createAppContainer,} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createDrawerNavigator } from 'react-navigation-drawer';
import Login from "../Components/Login";
import ListProjects from "../Components/ListProjects";
import {Ionicons} from "@expo/vector-icons";
import Profil from "../Components/Profil";
import Investir from "../Components/Investir";
import Logout from "../Components/Logout";



const ListStackNavigator = createStackNavigator({
    ListProjects: {  screen: ListProjects,

    },
    Investir: {  screen: Investir,
    }
})
const Navigator = createDrawerNavigator(
    {


        ListProjects: {
            screen: ListStackNavigator,
            navigationOptions: {
                title: 'Les Projets',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-apps" size={24} color={focused ? 'blue' : 'black'} />),
            }
        },


        Profile: {
            screen: Profil,
            navigationOptions: {
                title: 'Profile',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-person" size={24} color={focused ? 'blue' : 'black'} />
                ),
            }
        },
        Logout: {
            screen: Logout,
            navigationOptions: {
                title: 'Deconnexion',
                drawerIcon: ({ focused }) => (
                    <Ionicons name="md-close-circle" size={24} color={focused ? 'blue' : 'black'} />
                ),
            }
        },
    },

    {
        // drawerType: 'back',
        // drawerPosition: 'right',
        // drawerWidth: 200,
        //drawerBackgroundColor: '#0A7307',
        // contentComponent: CustomDrawerContentComponent
    }
);
const AppStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false,
        }

    },
    Navigator:{screen: Navigator,
        navigationOptions: {
            headerShown: false,
        }}

})

export default createAppContainer(AppStackNavigator);