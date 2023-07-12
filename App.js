
import React from 'react';
import {Text,View,Button, StyleSheet, StatusBar} from 'react-native'
import {colors} from './src/global/styles'
import Header from './src/components/Header';
import SigninScreen from './src/screens/SigninScreen';
import SigninWelcomeScreen from './src/screens/authScreens/SigninWelcomeScreen';
import RootNavigator from './src/navigation/RootNavigator';
import { SignInContextProvider } from './src/context/authContext';


const App=() => {
  return (
    <SignInContextProvider>
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      />


          <RootNavigator />
      
      {/* <View style= {{alignContent:"center",alignItems:"center",paddingTop:250,}}>
        <Text style={{fontWeight:"bold",fontSize:50}}>hello !</Text>
      </View> */}

    </View>
    </SignInContextProvider>
  )

};

const styles = StyleSheet.create({
  root: { flex: 1 }
})

export default App;
