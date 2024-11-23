import { configureStore } from "@reduxjs/toolkit";
 import { displayReducer,powerReducer } from "./displaySlicer";
const store = configureStore({
    reducer:{
displayString:displayReducer,
powerOn:powerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch; 

export default store;