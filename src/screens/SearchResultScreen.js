import React from "react";

import { Dimensions, StyleSheet, Text, View, FlatList } from "react-native";
import SearchResultCard from "../components/SearchResultCard";

import { restaurantsData } from "../global/Data";
import { colors } from "../global/styles";


const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>


            <View>
                <FlatList
                    style={{ backgroundColor: colors.cardBackground }}
                    data={restaurantsData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <SearchResultCard
                            screeWidth={SCREEN_WIDTH}
                            images={item.images}
                            averageReview={item.avarageReview}
                            numberOfReview={item.numberofReview}
                            restaurentName={item.restaurantName}
                            farAway={item.farAway}
                            businessAddress={item.businessAddress}
                            productData={item.productData}
                            OnPressRestaurantCard={()=>{navigation.navigate("RestaurantHomeScreen",{id:index,restaurant:item.restaurantName})}}

                        />
                    )}

                    ListHeaderComponent={
                        <View>
                            <Text style={styles.listHeader}> {restaurantsData.length} Search Result for {route.params.item}</Text>
                        </View>
                    }

                    showsVerticalScrollIndicator ={false}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:15

    },
    listHeader: {
        color: colors.grey1,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        fontWeight: "bold",
    }
})

export default SearchResultScreen;