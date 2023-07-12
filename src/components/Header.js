
import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native'
import {colors, parameters} from '../global/styles'

import Icon from 'react-native-vector-icons/MaterialIcons'


const Header = ({title, navigation}) => {

    return (
        <View style={styles.header}>
            <View style={{marginLeft:10}}>
                <Icon
                    type="material-community"
                    name='arrow-left'
                    color={colors.headerText}
                    size={30}
                    onPress={() => {navigation.goBack()}}
                />
            </View>
            <View>
                <Text style = {styles.headerText}>{title}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    },

    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft:20
    }

})

export default Header;

