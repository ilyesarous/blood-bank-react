import { configureStore } from "@reduxjs/toolkit";
import fullScreenReducer from "./components/bloodPage/BloodStore/FullScreen";
import bloodReducer from "./components/bloodPage/BloodStore/BloodSlice";
import updateReducer from "./components/bloodPage/BloodStore/updateBloodSlice";
import searchReducer from "./components/bloodPage/BloodStore/Search";
import AjoutReducer from "./components/patientPage/store/Ajoutredux";
import GetReducer from "./components/patientPage/store/getdata";
import ModifReducer from "./components/patientPage/store/Modifredux";

const store = configureStore({
    reducer: {
        blood: bloodReducer,
        fullScreen: fullScreenReducer,
        updateBlood: updateReducer,
        search: searchReducer,
        ajout: AjoutReducer,
        geet: GetReducer,
        modif: ModifReducer
    }
})

export default store