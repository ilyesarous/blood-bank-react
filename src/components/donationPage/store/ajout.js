import { createSlice } from "@reduxjs/toolkit";

const initialAjoutState = {
  patient: "",
  codeP: "",
  show: false,
  selected: false,
  showBonBefore: false,
  showError: false
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
    showBonBefore(state){
      state.showBonBefore = !state.showBonBefore
    },
    closeAlertHandler(state) {
      state.selected = !state.selected;
    },
    getcode(state, action) {
      state.codeP = action.payload;
    },
    getPatient(state, action) {
      state.patient = action.payload;
    },
    showError(state){
      state.showError = !state.showError
    }
  },
});

const AjoutReducerr = AjoutSlice.reducer;
export const AjoutActions = AjoutSlice.actions;

export default AjoutReducerr;
