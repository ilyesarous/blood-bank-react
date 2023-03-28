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
  numerotype: "",
  show: false,
};
const ModifSlice = createSlice({
  name: "modif",
  initialState: initialAjoutState,
  reducers: {
    Showme(state) {
      state.show = !state.show;
    },
    getCode(state, action) {
      const code = action.payload;
      state.codeD = code;
      console.log("el code ", state.codeD);
    },
    getLastName(state, action) {
      const name = action.payload;
      state.lastname = name;
    },
    getType(state, action) {
      const typeIden = action.payload;
      state.type = typeIden;
    },
    getNumerotype(state, action) {
      const Num = action.payload;
      state.numerotype = Num;
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
    updatDonateur(state) {

      console.log("etat", state.etat);
      // const b = state.date.map((x) => x);

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
        // date_creation: state.date,
        etat: state.etat,
      });
    },
  },
});

const ModifReducerr = ModifSlice.reducer;
export const modifActions = ModifSlice.actions;

export default ModifReducerr;
