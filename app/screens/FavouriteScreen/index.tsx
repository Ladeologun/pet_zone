import React from 'react';
import { View,StyleSheet} from 'react-native';
import FavouritePetCard from '../../components/FavouritePetCard';
import Header from '../../components/Header';
import Screen from '../../components/Screen';

const FavouritePetScreen: React.FC = (props)=>{
    return (
        <Screen>
            <View style={styles.container}>
                <Header description="Cats I Like"/>
                <View style={styles.trial}>
                    <FavouritePetCard 
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-1559241235.jpg?crop=0.586xw:0.880xh;0.0684xw,0.0611xh&resize=640:*"
                        name="Abyssinian"
                    />
                    <FavouritePetCard 
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-1559241235.jpg?crop=0.586xw:0.880xh;0.0684xw,0.0611xh&resize=640:*"
                        name="Abyssinian"
                    />
                </View>
                <View style={styles.trial}>
                    <FavouritePetCard 
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-1559241235.jpg?crop=0.586xw:0.880xh;0.0684xw,0.0611xh&resize=640:*"
                        name="Abyssinian"
                    />
                    <FavouritePetCard 
                        image="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
                        name="Abyssinian"
                    />
                </View>
                <View style={styles.trial}>
                    <FavouritePetCard 
                        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-1559241235.jpg?crop=0.586xw:0.880xh;0.0684xw,0.0611xh&resize=640:*"
                        name="Abyssinian"
                    />
                    <FavouritePetCard 
                        image="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
                        name="Abyssinian"
                    />
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingTop:15,
        backgroundColor:"#FFFFFF",
        flex:1
    },
    trial: {
        flexDirection:"row",
        justifyContent:"space-between"
    }
})

export default FavouritePetScreen;