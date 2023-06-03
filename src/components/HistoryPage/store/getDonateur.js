import { createSlice } from "@reduxjs/toolkit";


const initialState = { Code:"", search: "" }

const GetSlice = createSlice({
    name: "getDonateur",
    initialState,
    reducers: {
        CodePat(state, action) {
            state.Code = action.payload
        },
        Search(state, action){
            state.search = action.payload
        }
    }}
    )

const GetDonateurHisReducer = GetSlice.reducer
export const GetDonateurActions = GetSlice.actions

export default GetDonateurHisReducer