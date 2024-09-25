import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice"
//configureStore give u the store to store the Data

const appStore= configureStore({
    reducer:{
        card: cardReducer,
}}); 
export default appStore