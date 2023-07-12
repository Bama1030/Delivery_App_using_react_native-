import React, { useState, useContext, useEffect } from 'react';

import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet,TouchableOpacity } from 'react-native';

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { Avatar, Button, Icon, } from 'react-native-elements';

import { colors } from '../global/styles'

import { SignInContext } from '../context/authContext';

import auth from '@react-native-firebase/auth'


const DrawerContent = (props) => {

    const {dispatchSignedIn} =useContext(SignInContext)

    async function signOut(){
        try{
            auth()
            .signOut()
            .then(
                ()=>{console.log("USER SUCCESSFULLY SIGNED OUT")
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
            })
    
        }catch(error){
            Alert.alert(error.code)
        }
    }
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: colors.buttons }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingVertical: 10 }}>
                        <Avatar
                            rounded
                            avatarStyle={styles.avatar}
                            size={75}
                            source={require('../assets/InShot_20220727_233506452.jpg')}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: colors.cardBackground, fontSize: 18 }}>Bapi Mandal</Text>
                            <Text style={{ color: colors.cardBackground, fontSize: 12 }}>bapimandal12340@gmail.com</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 5 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ marginLeft: 1, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: 'bold', color: colors.cardBackground, fontSize: 18 }}>10</Text>
                                <Text style={{ color: colors.cardBackground, fontSize: 14 }}>My Favorites</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: 'bold', color: colors.cardBackground, fontSize: 18 }}>0</Text>
                                <Text style={{ color: colors.cardBackground, fontSize: 14 }}>My cart</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <DrawerItemList {...props} />

                <DrawerItem
                    label="Payment"
                    icon={({ color, size }) => (
                        <Icon
                            type='material-community'
                            name='credit-card'
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label="Promotion"
                    icon={({ color, size }) => (
                        <Icon
                            type='material-community'
                            name='tag-heart'
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label="Settings"
                    icon={({ color, size }) => (
                        <Icon
                            type='material-community'
                            name='cog-outline'
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label="Help"
                    icon={({ color, size }) => (
                        <Icon
                            type='material-community'
                            name='lifebuoy'
                            color={color}
                            size={size}
                        />
                    )}
                />

                {/* <View style={{borderTopWidth:1,borderTopColor:colors.grey4}}>
                        <Text style={styles.perferences}>Preferences</Text>
                        <View style={styles.switchText}>
                            <Text style={styles.darkthemeText}>Dark Theme</Text>
                            <View style={{paddingRight:10}}>
                                <Switch
                                    trackColor={{false:"#767577",true:"#81b0ff"}}
                                    thumbColor="#f4f3f4"
                                />
                            </View>
                        </View>
                </View> */}


            </DrawerContentScrollView>
            
            
            <DrawerItem
                    label="Sign Out"
                    icon={({ color, size }) => (
                        <Icon
                            type='material-community'
                            name='logout-variant'
                            color={color}
                            size={size}
                            onPress={()=>{signOut()}}
                        />
                    )}
                />
                
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems:"center",
        //justifyContent:'center'


    },
    avatar: {
        borderwidth: 4,
        borderColor: colors.pagebackground

    },
    perferences:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    switchText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0,
        fontWeight:'bold'
    }
})

export default DrawerContent;