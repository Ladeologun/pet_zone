import React from 'react';
import { Image,View, StyleSheet } from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons';

import AppText from '../AppText';

interface CardProps{
    image: string;
    name?: string
}

const PetListingCard: React.FC<CardProps> = ({image,name})=>{
    return (
        <View style={styles.container}>
            <View style={styles.subwrapper}>
                <View style={styles.imagecontainer}>
                    <Image style={{borderRadius:10}}  resizeMode='cover' source={{uri:image,height:50,width:50}} />
                </View>
                <AppText style={styles.text} words={name} />

            </View>
            <SimpleLineIcons name="heart"  color="#212227" size={24} onPress={()=>console.log("LIKED")} />
        </View>
    );
}

const styles = StyleSheet.create({
    imagecontainer: {
        height:50,
        width:50,
        borderRadius:10,
        marginRight:15,
    },
    subwrapper: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    text: {
        fontSize:16,
        color:'#212227',
        fontWeight:'500',
        lineHeight: 24
    },
    container: {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:28
    }
})

export default PetListingCard;