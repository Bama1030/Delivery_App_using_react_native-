import React, { useState, useRef,useEffect,useContext } from 'react';
import { View, Text, StyleSheet,Image, Animated, TextInput, Dimensions, StatusBar } from 'react-native'
import { colors, parameters } from '../../global/styles'
import { Button, Icon, SocialIcon  } from 'react-native-elements'
import Swiper from 'react-native-swiper'
import { SignInContext } from '../../context/authContext';
import auth from '@react-native-firebase/auth';

const SigninWelcomeScreen = ({navigation}) => {

    const {dispatchSignedIn} = useContext(SignInContext)

    useEffect(()=>{
        auth().onAuthStateChanged((user)=>{
            if(user){
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
            }else{
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
            }
        })
        
    },[])

    return(
        <View style={{flex:1,}}>

            <View style={{flex:3,justifyContent:"flex-start",alignItems:"center",paddingTop:20}}>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}}>DISCOVER SHOPS</Text>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}}>IN YOUR AREA</Text>
            </View>
            <View style={{flex:4,justifyContent:"center",marginBottom:250}}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source ={{uri:"https://rofportico.com/images/shop-img.jpg"}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source ={{uri:"https://content.jdmagicbox.com/comp/gurgaon/j2/011pxx11.xx11.090919131759.e7j2/catalogue/reliance-fresh-gurgaon-sector-23-gurgaon-departmental-stores-mlb3xs.jpg?clr="}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source ={{uri:"https://rofportico.com/images/shop-img.jpg"}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source ={{uri:"https://www.fitterfly.com/blog/wp-content/uploads/2022/04/blog-img-v1-1.jpg"}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                </Swiper>

            </View>
            <View style={{flex:1, justifyContent:'flex-end',marginBottom:20}}>
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                <Button
                    title="Sign In"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                    onPress={()=>navigation.navigate("SigninScreen")}
                />
            </View>
            <View style={{alignItems:"center",marginHorizontal:20, marginTop:30}}>
                <Button
                    title="Create an Account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                    onPress={()=>{navigation.navigate("SignUpScreen")}}
                />
            </View>

            </View>

        </View>
    )
    
}

const styles = StyleSheet.create({  

    slide1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#9DD6EB"
    },
    slide2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#97CAE5"
    },
    slide3:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#92BBD9"
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:20,
        borderColor:"#0097a7",
        borderWidth:1,
        height:40,
        paddingHorizontal:20
    },
    createButtonTitle:{
        color:colors.grey2,
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }

})

export default SigninWelcomeScreen;