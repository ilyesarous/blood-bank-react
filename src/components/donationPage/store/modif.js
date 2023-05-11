import { createSlice } from "@reduxjs/toolkit";

const initialAjoutState = {
  donateur: "",
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
    getDonateur(state, action) {
      state.donateur = action.payload;
    },
  },
});

const ModifReducerr = ModifSlice.reducer;
export const modifActions = ModifSlice.actions;

export default ModifReducerr;
