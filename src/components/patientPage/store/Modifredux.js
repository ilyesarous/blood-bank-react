import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const initialModifState = {
  patient: [],
  birth: "",
  codeP: "",
  lastName: "",
  phone: "",
  adresse: "",
  email: "",
  counteur: 0,
  select: false,
  showUpdate: false,
};

const ModifSlice = createSlice({
  name: "update",
  initialState: initialModifState,
  reducers: {
    ShowAlert(state) {
      if (state.codeP === "") state.select = true;
      else {
        state.showUpdate = !state.showUpdate;
        state.select = false;
      }
    },
    modif(state, action) {
      state.codeP = action.payload;
    },

    modifPat(state, action) {
      state.patient = action.payload;
    },

    modifBirth(state, action) {
      state.birth = action.payload;
    },
    modifLastName(state, action) {
      state.lastName = action.payload;
    },
    modifPhone(state, action) {
      state.phone = action.payload;
    },
    modifEmail(state, action) {
      state.email = action.payload;
    },
    modifAdress(state, action) {
      state.adresse = action.payload;
    },
    modifCounteur(state) {
      state.counteur++;
    },

    modifBlood(state, action) {
      state.bloodcode = action.payload;
    },

    Updat(state, action) {
      const pat = action.payload;
      const a = state.patient.map((s) => s);

      Axios.put(`http://localhost:9005/blood-bank/patient/${state.codeP}`, {
        code: a[0],
        firstNameAr: a[2],
        lastNameAr: a[1],
        fatherNameAr: a[3],
        grandFatherNameAr: a[4],
        fullNameAr: a[6],
        firstNameEng: a[7],
        lastNameEng: a[5],
        fatherNameEng: a[8],
        grandFatherNameEng: a[9],
        fullNameEng: a[10],
        birthDate: a[17],
        gender: a[12],
        phoneNumber: pat[3],
        adress: pat[1],
        email: pat[2],
        bloodCode: a[11],
      });
    },
  },
});

const ModifReducer = ModifSlice.reducer;
export const ModifActions = ModifSlice.actions;

export default ModifReducer;
