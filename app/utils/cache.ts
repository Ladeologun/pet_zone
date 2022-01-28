import AsyncStorage from '@react-native-async-storage/async-storage';

interface Cat {
    name:string
    image: string
  }
  

export const getCats = async (storage_key:string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storage_key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log(e)
    }
  }


export const store = async (storage_key:string,value:Cat) => {
    try{
        const favcats = await getCats(storage_key)
    
        if (favcats == null){
            const jsonValue = JSON.stringify([value])
            await AsyncStorage.setItem(storage_key, jsonValue)
        }else if (favcats.find((item:any) => item.name === value.name)){
            const filtmovies = favcats.filter((m:any)=>m.name != value.name)
            const jsonValue = JSON.stringify(filtmovies)
            await AsyncStorage.removeItem(storage_key)
            await AsyncStorage.setItem(storage_key, jsonValue)
        }else{
            const updatedmovie = [...favcats,value]
            const jsonValue = JSON.stringify(updatedmovie)
            await AsyncStorage.setItem(storage_key, jsonValue)
        }

    }catch(e){
        console.log(e)
    }

}