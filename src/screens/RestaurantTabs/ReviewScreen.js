import React from "react";
import { StyleSheet,View,Text,TouchableOpacity } from "react-native";
import { colors } from "../../global/styles";
import { Icon } from "react-native-elements";

import { specialData,menuData, menu } from "../../global/Data";

const ReviewScreen =({navigation,restaurant,onPress})=>{

   
    return(
        <View style={styles.container}>

            <View style={{flexDirection:'row'}}>
                <Text style={{paddingRight:10,fontSize:15,paddingLeft:10,fontWeight:"bold"}}>Reviews :</Text>
                <Icon
                    name="star" type="material-community" color="gold" paddingRight={5}
                />
                <Icon
                    name="star" type="material-community" color="gold" paddingRight={5}
                />
                <Icon
                    name="star" type="material-community" color="gold" paddingRight={5}
                />
                <Icon
                    name="star-half" type="material-community" color="gold" paddingRight={5}
                />
                <Text style={{paddingLeft:110}}> 3.5/5 </Text>
                
            </View>
            <View style={{marginTop:10,flexDirection:"row",alignItems:"center"}}>
                {/* <Icon name="circle" type="material" color="white" paddingLeft={8} size={13}  /> */}
            {/* <Text style={{paddingLeft:10,fontSize:16}}>Comments</Text> */}
                <View style={{paddingLeft:30}}>
                    
                    <Text>Testy Food</Text>
                </View>
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

export default ReviewScreen;
