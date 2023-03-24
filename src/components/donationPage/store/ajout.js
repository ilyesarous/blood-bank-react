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
};
const AjoutSlice = createSlice({
  name: "ajout",
  initialState: initialAjoutState,
  reducers: {
    Showme(state) {
      state.show = !state.show;
    },
    getcode(state, action) {
      const codepas = action.payload;
      state.codeP = codepas;
      console.log("le code", state.codeP);
    },
    getAdre(state, action) {
      const adresse = action.payload;
      state.adre = adresse;
    },
    getName(state, action) {
      const Name = action.payload;
      state.lastname = Name;
    },
    getSexe(state, action) {
      const Sexe = action.payload;
      state.sexe = Sexe;
      console.log("el sex", state.sexe);
    },
    getPhone(state, action) {
      const ph = action.payload;
      state.phone = ph;
      console.log("el tel", state.phone);
    },
    add(state, action) {
      const patient = action.payload;
      state.patient = patient;
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
        etat: pat[3],
        sexe: state.sexe,
        phoneNumber: state.phone,
      });
    },
  },
});

const AjoutReducerr = AjoutSlice.reducer;
export const AjoutActions = AjoutSlice.actions;

export default AjoutReducerr;
