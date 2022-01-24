import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

import AppText from '../AppText';

interface HeaderProps {
    description: string;
}

const Header: React.FC<HeaderProps> = ({description})=>{
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>{description}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'flex-start',
        height:60
    },
    text:{
        fontWeight:'700',
        fontSize:16,
        color:'#212227',
        lineHeight: 24
    }
})
export default Header;