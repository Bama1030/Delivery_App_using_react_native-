import React, { useState } from 'react'

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Pressable, Dimensions } from 'react-native'

import { Icon } from 'react-native-elements'

const BusinessConsoleScreen=()=>{
    return(
        <View style={styles.container}>
            <Text>Welcome to Business Console</Text>

        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'

    }
})

export default BusinessConsoleScreen;