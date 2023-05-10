import { createSlice } from "@reduxjs/toolkit";

const initialAjoutState = { show: false };
const AjoutSlice = createSlice({
  name: "ajout",
  initialState: initialAjoutState,
  reducers: {
    Showme(state) {
      state.show = !state.show;
    },
  },
});

const AjoutReducer = AjoutSlice.reducer;
export const AjoutActions = AjoutSlice.actions;

export default AjoutReducer;
