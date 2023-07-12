import React, { useState, useRef } from 'react'

import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal,TextInput,FlatList, Keyboard,TouchableOpacity } from 'react-native'
import { colors } from '../global/styles'
import { Icon } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { filterData } from '../global/Data'

import filter from 'lodash/filter'

const SearchComponent = () => {

    const navigation =useNavigation();
    const [data,setData] = useState([...filterData])
    const [modelVisible, setModelVisible] = useState(false)

    const [textInputFossued,setTextInputFossued]=useState(true)
    const textInput = useRef(0)

    const contains =({name},query)=> {
        if(name.includes(query)){
           return true
        }
        return false
    }

    const handleSearch= text =>{
        const dataS = filter(filterData, userSearch => {
            return contains(userSearch, text)
        })
        setData([...dataS])
    }

    return (
        <View style={{ alignItems: "center" }}>
            <TouchableWithoutFeedback
                onPress={() => {
                    setModelVisible(true)
                }}
            >
                <View style={styles.searchArea}>
                    <Icon
                        name='search'
                        style={styles.searchIcon}
                        type='material'
                        iconStyle={{ marginLeft: 5 }}
                        size={32}
                    />
                    <Text style={{ fontSize: 15 }}>What Are you looking for ?</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType='fade'
                transparent={false}
                visible={modelVisible}
            >
                <View style={styles.Model}>
                    <View style={styles.view1}>
                        <View style={styles.TextInput}>
                            <Animatable.View
                                animation={textInputFossued? "fadeInRight":"fadeInLeft"}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFossued ?"arrow-back":"search"}
                                    onPress={()=>{
                                        if(textInputFossued)
                                        setModelVisible(false)
                                        setTextInputFossued(true)
                                    }}
                                    style={styles.icon2}
                                    type='material'
                                    iconStyle={{marginRight:5}}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{width:"90%"}}
                                placeholder=''
                                autoFocus={false}
                                ref={textInput}

                                onFocus={()=>{
                                    setTextInputFossued(true)
                                }}
                                onBlur={()=>{
                                    setTextInputFossued(false)
                                }}
                                onChangeText={handleSearch}
                            />
                            <Animatable.View
                                animation={textInputFossued? "fadeInLeft":"fadeInRight"}
                                duration={400}
                            >
                                <Icon
                                     name={textInputFossued ?"cancel":null}
                                     onPress={()=>{
                                        textInput.current.clear()
                                        //handleSearch()
                                     }}
                                     style={{marginRight:-10}}
                                     type='material'
                                     iconStyle={{color:colors.grey3}}
                                />
                            </Animatable.View>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({item})=>(
                            <TouchableOpacity
                                onPress={()=>{

                                    Keyboard.dismiss
                                    navigation.navigate("SearchResultScreen",{item:item.name})
                                    setModelVisible(false)
                                    setTextInputFossued(true)
                                }}
                            >
                                <View style={styles.view2}>
                                    <Text style={{color:colors.grey2,fontSize:15}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item=>item.id}
                    />


                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        color: colors.grey3,
        fontSize: 16
    },
    TextInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        alignContent: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    searchArea: {
        marginTop: 10,
        width: "94%",
        height: 50,
        backgroundColor: colors.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey2,
        flexDirection: "row",
        alignItems: "center"
    },
    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },
    view1: {
        height: 70,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    view2: {
        flexDirection: "row",
        padding: 15,
        alignItems: 'center',
    },
    icon2: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },
    Model: {
        flex: 1,
    }

})

export default SearchComponent;