import { createSlice } from "@reduxjs/toolkit";


const initialState = { lastNamear:"",Code:"",Numero:"",show: false, showMenu: false }

const GetSlice = createSlice({
    name: "get",
    initialState,
    reducers: {
        lastName(state, action) {
            state.lastNamear = action.payload
        },
        CodePat(state, action) {
            state.Code = action.payload
        },
        NumTel(state, action) {
            state.Numero = action.payload
        },
        ShowMenu(state){
            state.showMenu = !state.showMenu
        }
    }}
    )

const GetReducer = GetSlice.reducer
export const GetActions = GetSlice.actions

export default GetReducer