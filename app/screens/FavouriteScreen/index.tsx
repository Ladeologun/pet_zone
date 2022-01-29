import React from 'react';
import { View,StyleSheet, FlatList, Text} from 'react-native';
import FavouritePetCard from '../../components/FavouritePetCard';
import Header from '../../components/Header';
import Screen from '../../components/Screen';
import { getCats } from '../../utils/cache';

const FavouritePetScreen: React.FC = (props)=>{
    const [CatList,SetCatList] = React.useState<any>([])

    React.useEffect(()=>{
        const fetchcats = async ()=>{
            let mycats = await getCats("catsilike")
            SetCatList(mycats)
        }
        fetchcats()
    },[CatList])
    return (<>{CatList &&
        <Screen>
            <View style={styles.container}>
                <Header description="Cats I Like"/>
                <FlatList 
                    data={CatList}
                    keyExtractor={(item,index) => index.toString()}
                    key={'_'}
                    numColumns={2}
                    columnWrapperStyle = {{justifyContent:"space-between"}}
                    renderItem={({item})=><FavouritePetCard  image={item.image} name={item.name}/>}
            />
            {!CatList.length && <Text style={styles.emptylist}>YOU DO NOT HAVE ANY CAT IN YOUR LIST</Text>}
            </View>
        </Screen>
        }
    </>
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
    },
    emptylist:{
        color:"black",
        position:"absolute",
        top:80,
        left:40,
        fontFamily:"Avenir",
        fontWeight:"bold"
    }
})

export default FavouritePetScreen;