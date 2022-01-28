import React from 'react';
import { Text,StyleSheet,Platform } from 'react-native';

interface TextProps {
    words:string|undefined
    style?:{[key:string]:any}
}

const AppText: React.FC<TextProps> = ({words,style})=>{
    return (
        <Text style={[styles.text,style]}>
            {words}
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