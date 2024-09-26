import { createSlice } from "@reduxjs/toolkit";

const cardSlice =createSlice({
    name: "Card",
    initialState: {
        item:[],
        cartItems: [],
        itemCount:0
        
    },
    reducers:{
        addItem:(state,action)=>{
           state.cartItems.push(action.payload); 
            state.itemCount += 1; 
        },
        removeItem: (state, action) => {
          state.cartItems = state.cartItems.filter((_, index) => index !== action.payload);
          state.itemCount -= 1;
        },
        setItems: (state, action) => {
            state.item = action.payload; 
        }
}
    })
    export const {addItem,setItems} = cardSlice.actions;
    export default cardSlice.reducer