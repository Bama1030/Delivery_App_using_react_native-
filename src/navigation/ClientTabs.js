import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../global/styles'

import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
//import SearchScreen from "../screens/SearchScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import ClientStack from "./clientStack";

const ClientTabs = createBottomTabNavigator();

const RootClientTabs = () => {
    return (
        <ClientTabs.Navigator
            screenOptions={{ tabBarActiveTintColor: colors.buttons }}
        >
            <ClientTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="home"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <ClientTabs.Screen
                name="ClientStack"
                component={ClientStack}
                options={
                    {
                        tabBarLabel: "Search",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="search"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <ClientTabs.Screen
                name="MyOrderScreen"
                component={MyOrderScreen}
                options={
                    {
                        tabBarLabel: "My Orders",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="view-list"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <ClientTabs.Screen
                name="MyAccount"
                component={MyAccountScreen}
                options={
                    {
                        tabBarLabel: "My Account",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name="person"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />


        </ClientTabs.Navigator>
    )
}

export default RootClientTabs;