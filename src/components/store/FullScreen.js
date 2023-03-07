import { createSlice } from "@reduxjs/toolkit";

const fullScreenSlice = createSlice({
    name: "full screen",
    initialState: { fullScreen: true},
    reducers:{
        fullScreenMode(state){
            state.fullScreen = !state.fullScreen
        }
    }
})

const fullScreenReducer = fullScreenSlice.reducer
export const fullScreenActions = fullScreenSlice.actions

export default fullScreenReducer