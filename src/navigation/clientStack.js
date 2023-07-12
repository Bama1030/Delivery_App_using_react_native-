import React,{useLayoutEffect} from "react";

import { StyleSheet,Text,View } from "react-native";
import { createNativeStackNavigator,TransitionPresets } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import MenuProductScreen from "../screens/MenuProductScreen";
import PreferanceScreen from "../screens/PreferenceScreen";
import FoodCard from "../components/FoodCard";

const ClientSearch =createNativeStackNavigator();

const ClientStack =({navigation,route})=>{

    React.useLayoutEffect(()=>{
        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName === "SearchScreen" ){
           // || "MenuProductScreen"
            navigation.setOptions({tabBarStyle:{display:'flex'}});
        }else{
            navigation.setOptions({tabBarStyle:{display:'none'}})
        }
    },[navigation,route]);

    return(
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                    name ="SearchScreen"
                    component={SearchScreen}
                    options={
                        ()=>({headerShown:false})
                    }
            />
             
            <ClientSearch.Screen
                    name ="SearchResultScreen"
                    component={SearchResultScreen}
                    options={
                        ()=>({headerShown:false})
                    }
            />

            <ClientSearch.Screen
                    name ="RestaurantHomeScreen"
                    component={RestaurantHomeScreen}
                    options={
                        ()=>({headerShown:false})
                    }
            />

            <ClientSearch.Screen
                    name ="MenuProductScreen"
                    component={MenuProductScreen}
                    options={
                        ()=>({headerShown:false})
                    }
            />

            <ClientSearch.Screen 
                name ="PreferenceScreen"
                component={PreferanceScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

             {/* <ClientSearch.Screen 
                name ="FoodCard"
                component={FoodCard}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            /> */}


        </ClientSearch.Navigator>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})

export default ClientStack;