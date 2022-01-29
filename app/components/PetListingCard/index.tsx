import React from 'react';
import { Image,View, StyleSheet } from 'react-native';
import {SimpleLineIcons,MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from '../AppText';
import { asyncstore } from '../../utils/cache';
import { getCatsByName } from '../../utils/likedCats';

interface CardProps{
    image: string;
    name: string
}

const PetListingCard: React.FC<CardProps> = ({image,name})=>{
    const petdetail = {image,name};
    const [liked,SetLiked] =React.useState(false)
    const [refresh,SetRefresh] = React.useState(false)


    React.useEffect(()=>{
        const getPetstate = async()=>{
            const petState:any = await getCatsByName(petdetail)
            SetLiked(petState)
        }
        getPetstate();
    },[refresh])


    return (
        <View style={styles.container}>
            <View style={styles.subwrapper}>
                <View style={styles.imagecontainer}>
                    <Image style={{borderRadius:10}}  resizeMode='cover' source={{uri:image,height:50,width:50}} />
                </View>
                <AppText style={styles.text} words={name} />

            </View>
            {liked? <MaterialCommunityIcons
                name="heart"  
                color="red"
                size={24} 
                onPress={async()=>{
                    await asyncstore("catsilike",petdetail)
                    SetRefresh((prev)=>!prev)
                    console.log("liked")
                }} 
            />:
            <SimpleLineIcons
                name="heart"  
                color="grey"
                size={22} 
                onPress={async()=>{
                    await asyncstore("catsilike",petdetail)
                    SetRefresh((prev)=>!prev)
                    console.log("liked")
                }} 
            />}
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