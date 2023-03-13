import { configureStore } from "@reduxjs/toolkit";
import fullScreenReducer from "./FullScreen";
import bloodReducer from "./BloodSlice";
import updateReducer from "./updateBloodSlice";
import searchReducer from "./Search";

const store = configureStore({
    reducer: {
        blood: bloodReducer,
        fullScreen: fullScreenReducer,
        updateBlood: updateReducer,
        search: searchReducer
    }
})

export default store