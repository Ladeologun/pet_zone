import React from 'react';
import { View,StyleSheet, Image } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppText from '../AppText';

interface CardProps{
    image: string;
    name: string
}

const FavouritePetCard: React.FC<CardProps> = ({image,name}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:image}} />
            <View style={styles.detailscontainer}>
                <AppText style={styles.text} words={name} />
                <MaterialCommunityIcons name="heart"  color="red" size={26} onPress={()=>console.log("LIKED")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width:'100%',
        borderRadius:10,
        height:160,
        marginBottom:3
    },
    detailscontainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        height:35
    },
    container: {
        width:166,
        backgroundColor:"white"
    },
    text: {
        color:"#212227",
        fontWeight:"600",
        fontSize:17
    }
})

export default FavouritePetCard;