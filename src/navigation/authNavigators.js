import React from 'react';

import {createNativeStackNavigator,TransitionPresets} from '@react-navigation/native-stack';
import SigninWelcomeScreen from '../screens/authScreens/SigninWelcomeScreen';
import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';




const Auth = createNativeStackNavigator();

const AuthStack = () =>{
    return(
        <Auth.Navigator>
            
            <Auth.Screen 
            name='SigninWelcomeScreen' component={SigninWelcomeScreen}
            options={{headerShown: false}}
            />

            <Auth.Screen 
            name='SignUpScreen' component={SignUpScreen}
            options={{headerShown: false}}
            />

            <Auth.Screen 
            name='SigninScreen' component={SigninScreen}
            options={{headerShown:false,}}
            />


        </Auth.Navigator>
    )


}

export default AuthStack;