import React from "react";
import { StyleSheet,View,Text,TouchableOpacity } from "react-native";
import { colors } from "../../global/styles";
import { Icon } from "react-native-elements";

import { specialData,menuData, menu } from "../../global/Data";

const InfoScreen =({navigation,restaurant,onPress})=>{

   
    return(
        <View style={styles.container}>
            <View>

                <View>
                    <Text style={{alignSelf:"center",fontSize:20,paddingTop:-5,fontWeight:"bold",}}>Available Items</Text>
                </View>
                {menu.map((items)=>
                    <View key ={items.key} style={styles.view1}>
                        <TouchableOpacity onPress={onPress}>
                            <View style={styles.view2}>
                                <Icon name="square" type="material-community" color="gold"/>
                                <Text style={styles.text1}>{items.title}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                )
                }
            </View>
        </View>
    )
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
    },
    view1:{
        paddingHorizontal:10,
    },

    view2:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        padding:10,
        borderBottomColor:colors.grey5,
    },
    text1:{
        color:colors.grey3,
        fontSize:18,
        fontWeight:"bold"
    }
})

export default InfoScreen;
