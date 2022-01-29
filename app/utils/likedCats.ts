import AsyncStorage from '@react-native-async-storage/async-storage';

interface Cat {
    name:string
    image: string
  }

export const getCatsByName = async (item:Cat) => {
    try {
        console.log("here")
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
      console.log("did not work")
    }
  }