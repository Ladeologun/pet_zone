import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import Constants from 'expo-constants';

interface Iprops{
    children: React.ReactNode
}

const Screen: React.FC<Iprops> = ({children}) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:Constants.statusBarHeight,
        backgroundColor:'#FFFFFF',
        flex:1
    }
})

export default Screen;