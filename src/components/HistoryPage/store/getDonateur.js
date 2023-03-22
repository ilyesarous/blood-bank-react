import { createSlice } from "@reduxjs/toolkit";


const initialState = { Code:"" }

const GetSlice = createSlice({
    name: "getDonateur",
    initialState,
    reducers: {
        CodePat(state, action) {
            state.Code = action.payload
        },
        
    }}
    )

const GetDonateurReducer = GetSlice.reducer
export const GetDonateurActions = GetSlice.actions

export default GetDonateurReducer