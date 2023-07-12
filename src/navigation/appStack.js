import React from 'react';

import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack';
import MapScreen from '../screens/MapScreen';
import DrawerNavigator from './DrawerNavigator';


const App = createNativeStackNavigator();

export function AppStack(){
    return (
        <App.Navigator>
            <App.Screen
                name='App' component={DrawerNavigator}
                options={{ headerShown: false, }}
            />



            <App.Screen
                name='MapScreen' component={MapScreen}
                options={{ headerShown: false, }}
            />
        </App.Navigator>
    )
}

