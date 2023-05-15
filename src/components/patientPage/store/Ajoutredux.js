import { createSlice } from "@reduxjs/toolkit";

const initialAjoutState = { show: false, showAlert: false };
const AjoutSlice = createSlice({
  name: "ajout",
  initialState: initialAjoutState,
  reducers: {
    Showme(state) {
      state.show = !state.show;
    },
    ShowAlert(state){
      state.showAlert = !state.showAlert
    }
  },
});

const AjoutReducer = AjoutSlice.reducer;
export const AjoutActions = AjoutSlice.actions;

export default AjoutReducer;
