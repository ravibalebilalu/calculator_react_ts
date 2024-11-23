import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

 const powerSlice = createSlice({
    name:"powerOn",

    initialState:{
        value:false
    },
    reducers:{
        toglePower(state){
            state.value = !state.value
        }
    }
 })
 
 
 const displaySlice = createSlice({
    name:"displayString",
    initialState:{
        value:""
    },
    reducers:{
        addToDisplay(state ,action:PayloadAction<string>){
            state.value +=  action.payload
        },
        clearDisplay(state){
            state.value=""
        }
    }

 })

 export const {addToDisplay,clearDisplay} = displaySlice.actions;
 export const {toglePower} = powerSlice.actions
 export  const displayReducer =  displaySlice.reducer
 export const powerReducer =  powerSlice.reducer