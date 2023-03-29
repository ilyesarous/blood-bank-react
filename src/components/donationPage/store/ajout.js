import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
const url = "http://localhost:9005/blood-bank/donation";

const initialAjoutState = {
  patient: [],
  adre: "",
  codeP: "",
  lastname: "",
  phone: "",
  sexe: "",
  show: false,
  selected: false,
};
const AjoutSlice = createSlice({
  name: "ajout",
  initialState: initialAjoutState,
  reducers: {
    Showme(state) {
      if (state.codeP === "") {
        state.selected = true;
      } else {
        state.selected = false;
        state.show = !state.show;
      }
    },
    closeAlertHandler(state) {
      state.selected = !state.selected;
    },
    getcode(state, action) {
      state.codeP = action.payload;
      console.log("le code", state.codeP);
    },
    getAdre(state, action) {
      state.adre = action.payload;
    },
    getName(state, action) {
      state.lastname = action.payload;
    },
    getSexe(state, action) {
      state.sexe = action.payload;

      console.log("el sex", state.sexe);
    },
    getPhone(state, action) {
      state.phone = action.payload;

      console.log("el tel", state.phone);
    },
    add(state, action) {
      state.patient = action.payload;
    },
    addDonation(state, action) {
      const pat = action.payload;
      console.log("jdid", pat);

      Axios.post(url, {
        fullName: state.lastname,
        codePatient: state.codeP,
        age: pat[2],
        typeIdentity: pat[0],
        numIdentity: pat[1],
        adress: state.adre,
        etat: pat[4],
        blood: pat[3],
        sexe: state.sexe,
        phoneNumber: state.phone,
      });
    },
  },
});

const AjoutReducerr = AjoutSlice.reducer;
export const AjoutActions = AjoutSlice.actions;

export default AjoutReducerr;
