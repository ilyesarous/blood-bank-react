import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const initialAjoutState = {
  donateur: [],
  // date: "",
  codeD: "",
  lastname: "",
  type: "",
  etat: "",
  blood: "",
  observation: "",
  numerotype: "",
  show: false,
  selected: false,
};
const ModifSlice = createSlice({
  name: "modif",
  initialState: initialAjoutState,
  reducers: {
    Showme(state) {
      // state.show = !state.show;
      if(state.lastname === ""){
        state.selected = true
      }else {
        state.selected = false
        state.show = !state.show
      }
    },
    getCode(state, action) {
      state.codeD = action.payload;
      console.log("el code ", state.codeD);
    },
    getLastName(state, action) {
      state.lastname = action.payload;
    },
    getType(state, action) {
      state.type = action.payload;
    },
    getNumerotype(state, action) {
      state.numerotype = action.payload;
    },
    getstate(state, action) {
      state.etat = action.payload;
    },
    getDonateur(state, action) {
      state.donateur = action.payload;
    },
    getBlood(state, action) {
      state.blood = action.payload;
    },
    getObservation(state, action){
      state.observation = action.payload
    },
    updatDonateur(state) {
      const a = state.donateur.map((s) => s);
      console.log("tab", a);

      Axios.put(`http://localhost:9005/blood-bank/donation/${state.codeD}`, {
        code: state.codeD,
        codePatient: a[1],
        fullName: a[2],
        age: a[3],
        sexe: a[7],
        typeIdentity: a[5],
        numIdentity: a[6],
        phoneNumber: a[4],
        adress: a[8],
        blood: state.blood,
        observation: state.observation,
        etat: state.etat,
      });
    },
  },
});

const ModifReducerr = ModifSlice.reducer;
export const modifActions = ModifSlice.actions;

export default ModifReducerr;
