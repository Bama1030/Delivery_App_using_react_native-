import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';
import { colors } from '../global/styles';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent ={props =><DrawerContent {...props} />}
        >
            <Drawer.Screen
                name='RootClientTabs'
                component={RootClientTabs}

                options={{
                    title: 'Client',
                    headerShown: false,
                    drawerIcon: ({ focussed, size }) => (
                        <Icon
                            type='material-community'
                            name='home'
                            color={focussed ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name='Business consoleScreen'
                component={BusinessConsoleScreen}

                options={{
                    title: 'Business Console',
                    headerShown: false,
                    drawerIcon: ({ focussed, size }) => (
                        <Icon
                            type='material'
                            name='business'
                            color={focussed ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;