import { configureStore } from "@reduxjs/toolkit";
import fullScreenReducer from "./components/bloodPage/BloodStore/FullScreen";
import bloodReducer from "./components/bloodPage/BloodStore/BloodSlice";
import updateReducer from "./components/bloodPage/BloodStore/updateBloodSlice";
import searchReducer from "./components/bloodPage/BloodStore/Search";
import AjoutReducer from "./components/patientPage/store/Ajoutredux";
import GetReducer from "./components/patientPage/store/getdata";
import ModifReducer from "./components/patientPage/store/Modifredux";
import AjoutReducerr from "./components/donationPage/store/ajout";
import ModifReducerr from "./components/donationPage/store/modif";
import GetDonateurReducer from "./components/HistoryPage/store/getDonateur";

const store = configureStore({
    reducer: {
        blood: bloodReducer,
        fullScreen: fullScreenReducer,
        updateBlood: updateReducer,
        search: searchReducer,
        ajout: AjoutReducer,
        ajoutDonation:AjoutReducerr,
        modifDonation:ModifReducerr,
        getDonateur:GetDonateurReducer,
        geet: GetReducer,
        modif: ModifReducer
    }
})

export default store