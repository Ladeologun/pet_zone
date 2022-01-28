import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL,API_KEY } from '../../constants';

const namespace = "cats"
export const fetchCats = createAsyncThunk(
    `${namespace}/fetchCats`,
    async (page:number,thunkAPI) =>{
        const {data} = await axios.get(`${API_URL}/breeds?Page=${page}`,{
            params:{
                'x-api-key': API_KEY
            }
        })
        return data
    }
)

export interface catState{
    isLoading:Boolean,
    cats:{[key:string]:any}[]
}

const initialState:catState ={
    isLoading:false,
    cats:[],
}

const catSlice = createSlice({
    name:namespace,
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchCats.pending,(state,action)=>{
                state.isLoading = true
            })
            .addCase(fetchCats.fulfilled,(state,action)=>{
                state.isLoading = false
                state.cats = [...action.payload]
            })
            .addCase(fetchCats.rejected,(state,action)=>{
                state.isLoading = false
            })
    }
})

export default catSlice.reducer;