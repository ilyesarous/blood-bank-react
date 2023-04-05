import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, selected: false };

const addSlice = createSlice({
  name: "addDemande",
  initialState,
  reducers: {
    addCount(state) {
      state.count++;
    },
    subtractCount(state, action) {
      state.count = action.payload;
    },
    setSelected(state) {
      state.selected = !state.selected;
    },
  },
});

const addDemandeReducer = addSlice.reducer;
export const addActions = addSlice.actions;

export default addDemandeReducer;
