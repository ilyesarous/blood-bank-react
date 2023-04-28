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
import GetDonateurHisReducer from "./components/HistoryPage/store/getDonateur";
import GetReducerr from "./components/donationPage/store/get";
import addReducer from "./components/stockPage/store/AddSlice";
import addDemandeReducer from "./components/demande/store/AddSlice";
import authReducer from "./components/authentification/store/authSlice";

const store = configureStore({
    reducer: {
        blood: bloodReducer,
        fullScreen: fullScreenReducer,
        updateBlood: updateReducer,
        search: searchReducer,
        ajout: AjoutReducer,
        ajoutDonation:AjoutReducerr,
        modifDonation:ModifReducerr,
        getDonation:GetReducerr,
        getDonateur:GetDonateurHisReducer,
        geet: GetReducer,
        modif: ModifReducer,
        addStock: addReducer,
        addDemande: addDemandeReducer,
        auth: authReducer
    }
})

export default store