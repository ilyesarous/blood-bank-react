import { configureStore } from "@reduxjs/toolkit";
import fullScreenReducer from "./FullScreen";
import bloodReducer from "./BloodSlice";
import updateReducer from "./updateBloodSlice";

const store = configureStore({
    reducer: {
        blood: bloodReducer,
        fullScreen: fullScreenReducer,
        updateBlood: updateReducer
    }
})

export default store