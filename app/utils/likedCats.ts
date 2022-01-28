import AsyncStorage from '@react-native-async-storage/async-storage';

interface Cat {
    name:string
    image: string
  }

export const getMoviesbyId = async (item:Cat) => {
    try {
      const jsonValue = await AsyncStorage.getItem("catsilike")
      const value = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (value){
          if (value.find((m:any)=>m.name === item.name)){
              return true
          }else{
              return false
          }
      }else{
          return false
      }
    } catch(e) {
      console.log(e)
    }
  }