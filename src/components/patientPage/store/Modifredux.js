import { createSlice } from "@reduxjs/toolkit";

const initialModifState = {
  patient: "",
  counteur: 0,
  codeP : "",
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
    getCodePatient(state, action){
      state.codeP = action.payload
    },
    modifPat(state, action) {
      state.patient = action.payload;
      console.log("state.patient: ", state.patient);
    },
    modifCounteur(state) {
      state.counteur++;
    },

    modifBlood(state, action) {
      state.bloodcode = action.payload;
    },
  },
});

const ModifReducer = ModifSlice.reducer;
export const ModifActions = ModifSlice.actions;

export default ModifReducer;
