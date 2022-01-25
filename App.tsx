import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FavouritePetScreen from './app/screens/FavouriteScreen';
import PetListingScreen from './app/screens/PetListingScreen';


const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarStyle: {
        backgroundColor:"#FFFFFF"
      },
      tabBarLabelStyle:{
        fontWeight:"500",
        fontSize:14
      },
      tabBarInactiveTintColor:"lightgrey",
      tabBarActiveTintColor:'black'
    }}
  >
      <Tab.Screen 
        name="All Cats" 
        component={PetListingScreen} 
        options={()=>({
          tabBarIcon:({focused, color, size})=>(
            <Image source={require("./app/assets/cat.png")} style={{tintColor:focused? "black":"lightgrey"}}/>
          )
        })}
      
      />
      <Tab.Screen 
        name="Cats I like" 
        component={FavouritePetScreen}
        options={()=>({
          tabBarIcon:({focused, color, size})=>(
            <Image source={require("./app/assets/like.png")} style={{tintColor:focused? "black":"lightgrey"}} />
          )
        })} 
      
      />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
