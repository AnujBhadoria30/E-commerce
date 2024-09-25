import { createSlice } from "@reduxjs/toolkit";

const cardSlice =createSlice({
    name: "Card",
    initialState: {
        item:[],
        itemCount:0
        
    },
    reducers:{
        addItem:(state,action)=>{
            state.item=action.payload
            state.itemCount += 1; 
        },
        setItems: (state, action) => {
            state.item = action.payload; // Yahan API se aaye items ko set karega
        }
    }
    })
    export const {addItem,setItems} = cardSlice.actions;
    export default cardSlice.reducer