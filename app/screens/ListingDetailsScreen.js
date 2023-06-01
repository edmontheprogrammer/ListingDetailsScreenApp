import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText/AppText'; 

import ListItem from '../components/ListItem';

import colors from '../components/configs/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/woman_red_jacket.jpg')} /> 
            <View style={styles.detailsContainer}>
                <AppText  style={styles.title}> Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContianer}>
                <ListItem 
                    image={require("../assets/edmon_whie_shirt_photo.jpg")}
                    title="Edmon"
                    subTitle="4 Listings"/>
                </View>
             
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20, 
    },
    image: {
        width: '100%', 
        height: 300,
    }, 
    price: {
        color: "grey", 
        fontWeight: "bold", 
        fontSize: 20,  
        marginVertical: 10, 
    },
    title: {
        fontSize: 24, 
        fontWeight: "500", 
    }, 
    userContianer: {
        marginVertical: 50, 
    }
})

export default ListingDetailsScreen;