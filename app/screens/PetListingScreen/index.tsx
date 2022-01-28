import React,{useEffect,useState} from 'react';
import { View,StyleSheet, ScrollView, Text, FlatList, ActivityIndicator} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../store';
import Header from '../../components/Header';
import PetListingCard from '../../components/PetListingCard';
import Screen from '../../components/Screen';
import {catState, fetchCats} from '../../features/cats/catSlice'

const PetListingScreen: React.FC = (props)=>{
    const [page,setPage] = useState(1)
    const dispatch = useAppDispatch()
    const {cats,isLoading} = useAppSelector<catState>((state)=>state.cats)
   
    useEffect(()=>{
        dispatch(fetchCats(page))
    },[dispatch,page])


    const handleLoadMore = () =>{
        setPage((preq)=>preq+1)
    }


    const renderFooter = ()=>{
        return(isLoading?
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>:null
        )
    }

    return (
        <Screen>
            <View style={styles.container}>
                <Header description="All Cats"/>
                {cats.length > 0 ? <FlatList
                    style={styles.listing}
                    data = {cats}
                    keyExtractor = {(item)=>item.id}
                    renderItem = {({item})=> <PetListingCard image={item?.image?.url} name={item.name} />}
                    onEndReached = {handleLoadMore}
                    onEndReachedThreshold={0}
                    ListFooterComponent = {renderFooter}    
                />:null}
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
    listing:{
        width:'100%'
    },
    loader:{
        marginTop:10,
        alignItems:"center"
    }
})

export default PetListingScreen;