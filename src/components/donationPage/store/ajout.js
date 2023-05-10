import { createSlice } from "@reduxjs/toolkit";

const initialAjoutState = {
  patient: "",
  codeP: "",
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
    },
    getPatient(state, action) {
      state.patient = action.payload;
    },
  },
});

const AjoutReducerr = AjoutSlice.reducer;
export const AjoutActions = AjoutSlice.actions;

export default AjoutReducerr;
