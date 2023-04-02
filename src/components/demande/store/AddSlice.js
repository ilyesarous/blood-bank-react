import { createSlice } from "@reduxjs/toolkit";

const initialState = {count: 0}

const addSlice = createSlice({
    name: "addDemande",
    initialState,
    reducers: {
        addCount(state){
            state.count++
        },
        subtractCount(state){
            state.count--
        }
    }
})

const addDemandeReducer = addSlice.reducer
export const addActions = addSlice.actions

export default addDemandeReducer