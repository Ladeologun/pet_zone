import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FavouritePetScreen from './app/screens/FavouriteScreen';
import PetListingScreen from './app/screens/PetListingScreen';

export default function App() {
  return (
    <FavouritePetScreen />
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
