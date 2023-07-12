import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions, FlatList } from 'react-native';

//import { useNavigation } from '@react-navigation/native';

import { restaurantsData } from '../global/Data';

import { Icon } from 'react-native-elements';

import { colors } from '../global/styles';

const FoodCard = ({
    onPressFoodCard,
    resturantsName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfreview,
    businessAddress,
    farAway,
    avarageReview,
    images,
    screenWidth}) => {
    return (
        <View>
            <TouchableOpacity
                onPress={onPressFoodCard}
            >
                <View style={{ ...styles.cardView, width: screenWidth }}>
                    <Image
                        style={{ ...styles.image, width: screenWidth }}
                        source={{ uri: images }}
                    />

                    <View>
                        <View>
                            <Text style={styles.restaurantName}>{resturantsName}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={styles.distance}>
                                <Icon
                                    name='place'
                                    type='material'
                                    color={colors.grey2}
                                    size={18}
                                    iconStyle={{
                                        marginTop: 3
                                    }}
                                />
                                <Text style={styles.Min}> {farAway} Min</Text>
                            </View>
                            <View style={{ flex: 9, flexDirection: "row" }}>
                                <Text style={styles.address}>{businessAddress}</Text>
                            </View>

                        </View>
                    </View>
                </View>

                <View style={styles.review}>
                    <Text style={styles.avarage}>{avarageReview}</Text>
                    <Text style={styles.numberOfReview}>{numberOfreview} reviews</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: 9,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: 1,
        borderColor: colors.grey4,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 150,
    },
    restaurantName: {
        fontSize: 17,
        fontWeight: "bold",
        color: colors.grey1,
        marginTop: 5,
        marginLeft: 10
    },
    distance: {
        flex: 4,
        flexDirection: "row",
        borderRightColor: colors.grey4,
        paddingHorizontal: 5,
        borderRightWidth: 1
    },
    Min: {
        fontSize: 12,
        fontWeight: "bold",
        paddingTop: 5,
        color: colors.grey3
    },
    address: {
        fontSize: 12,
        paddingTop: 5,
        color: colors.grey2,
        paddingHorizontal: 10
    },
    review: {
        position: "absolute",
        top: 0,
        right: 10,
        backgroundColor: 'rgba(52, 52, 52,0.3)',
        padding: 2, alignItems: "center",
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 12,
    },
    avarage: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: -3
    },
    numberOfReview: {
        color: "white",
        fontSize: 13,
        marginRight: 0,
        marginLeft: 0
    }

})

export default FoodCard;