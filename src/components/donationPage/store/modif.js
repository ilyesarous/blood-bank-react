import { createSlice } from "@reduxjs/toolkit";

const initialAjoutState = {
  donateur: "",
  show: false,
  selected: false,
  showBon: false
};
const ModifSlice = createSlice({
  name: "modif",
  initialState: initialAjoutState,
  reducers: {
    Showme(state) {
      if(state.donateur === ""){
        state.selected = true
      }else {
        state.selected = false
        state.show = !state.show
      }
    },
    getDonateur(state, action) {
      state.donateur = action.payload;
    },
    showBonAfter(state){
      state.showBon =! state.showBon
    },
    showUpdateAlert(state){
      state.selected = false
    }
  },
});

const ModifReducerr = ModifSlice.reducer;
export const modifActions = ModifSlice.actions;

export default ModifReducerr;
