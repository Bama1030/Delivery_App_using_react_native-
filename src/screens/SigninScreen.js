import React, { useState, useRef,useContext } from 'react';
import { View, Text, StyleSheet, Animated, TextInput, Dimensions, StatusBar, Alert } from 'react-native'
import { colors, parameters } from '../global/styles'
import { Button, Icon, SocialIcon } from 'react-native-elements'

import * as Animatable from 'react-native-animatable';
import Header from '../components/Header'

import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { SignInContext } from '../context/authContext';




const SigninScreen = ({ title, type, navigation }) => {


    const {dispatchSignedIn} = useContext(SignInContext)

    const [TextInput2Fossued, setTextInput2Fossued] = useState(false)

    const TextInput1 = useRef(1)
    const TextInput2 = useRef(2)


async function signIn(data){
    try{
    const {password,email} = data
    const user = await auth().signInWithEmailAndPassword(email,password)
    if(user){
        dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
    }
}
    catch(error){
        Alert.alert(
            error.name,
            error.message
        )
        }
    }



    return (
        <View style={styles.container}>

            <Header title="My Account" name="arrow-left"
                        type="material-community" navigation={navigation} />
            {/* <View>
                <Text style={title}>Sign-in</Text>
            </View> */}
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={styles.Text1}>Please enter the Email And Password</Text>
                <Text style={styles.Text1}>Register your Account</Text>
            </View>



            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    signIn(values)
                }}
            >

                { (props)=>
                    <View>
                        <View style={{ marginTop: 30 }}>
                            <View>
                                <TextInput
                                    style={styles.TextInput1}
                                    placeholder='Email'
                                    ref={TextInput1}
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                />
                            </View>

                            <View style={styles.TextInput2}>
                                <Animatable.View animation={TextInput2Fossued ? "" : "fadeInRight"} duration={400} >
                                    <Icon
                                        name='lock'
                                        iconStyle={{ color: colors.gray3 }}
                                        type="material"
                                        size={20}
                                        style={{}}
                                    />

                                </Animatable.View>
                                <TextInput
                                    style={{ width: "80%" }}
                                    placeholder='Password'
                                    ref={TextInput2}
                                    onFocus={() => {
                                        setTextInput2Fossued(false)
                                    }}

                                    onBlur={() => {
                                        setTextInput2Fossued(true)
                                    }}
                                    onChangeText={props.handleChange('password')}
                                    value = {props.values.password}
                                />

                                <Animatable.View animation={TextInput2Fossued ? "" : "fadeInLeft"} duration={400} >
                                    <Icon
                                        name='visibility-off'
                                        iconStyle={{ color: colors.grey3 }}
                                        type="material"
                                        size={20}
                                        style={{ marginRight: 10 }}

                                    />

                                </Animatable.View>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                            <Button
                                title="Sign In"
                                buttonStyle={parameters.styledButton}
                                titleStyle={parameters.buttonTitle}
                                onPress={props.handleSubmit}
                            />
                        </View>
                    </View>
                }
            </Formik>


            <View style={{ alignItems: "center", marginTop: 25 }}>
                <Text style={{ ...styles.Text1, textDecorationLine: "underline" }}>Forgot Password ?</Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 20, marginBottom: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
            </View>

            {/* <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                <SocialIcon
                    title="Sign in With Facebook"
                    button
                    type="facebook"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View> */}
            <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                <SocialIcon
                    title="Sign in With Google"
                    button
                    type="google"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View>

            <View style={{ marginTop: 20, marginLeft: 20 }}>
                <Text style={{ ...styles.Text1, }}>New on this App ?</Text>
            </View>

            <View style={{ alignItems: "center", marginHorizontal: 20, marginTop: 50,alignContent:'flex-end' }}>
                <Button
                    title="Create an Account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                    onPress={()=>{navigation.navigate("SignUpScreen")}}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    Text1: {
        color: colors.grey2,
        fontSize: 14
    },
    TextInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },
    TextInput2: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        paddingLeft: 12

    },

    SocialIcon: {
        borderRadius: 12,
        height: 50
    },

    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderColor: "#0097a7",
        borderWidth: 1,
        height: 40,
        paddingHorizontal: 20
    },
    createButtonTitle: {
        color: "#0097a7",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }

})

export default SigninScreen;