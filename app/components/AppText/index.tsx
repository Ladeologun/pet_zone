import React from 'react';
import { Text,StyleSheet,Platform } from 'react-native';

interface TextProps {
    children:React.ReactNode,
    style?:{[key:string]:any}
}

const AppText: React.FC<TextProps> = ({children,style})=>{
    return (
        <Text style={[styles.text,style]}>
            {children}
        </Text>
    );
}


const styles = StyleSheet.create({
    text: {
        color: "tomato",
        ...Platform.select({
            ios:{
                fontSize: 20,
                fontFamily: "Avenir"
            },
            android:{
                fontSize: 20,
                fontFamily: "Roboto"
            }
        })
    }
})
export default AppText;