import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false, count: 0, code: "", selected: false, blood: "" };

const addSlice = createSlice({
  name: "addStock",
  initialState,
  reducers: {
    showCardHandler(state) {
      state.show = !state.show;
    },
    countHandler(state) {
      state.count++;
    },
    setCode(state, action) {
      state.code = action.payload;
    },
    setSelected(state) {
      if (state.code !== "") state.selected = false;
      else state.selected = true;
    },
    getBlood(state, action){
      state.blood = action.payload
      console.log(state.blood);
    }
  },
});

const addReducer = addSlice.reducer;
export const addActions = addSlice.actions;

export default addReducer;
