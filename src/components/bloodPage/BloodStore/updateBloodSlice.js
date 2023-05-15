import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blood: "",
  showUpdate: false,
  selected: false,
  code: 0,
  bloodGrp : "",
  rhesus : ""
};
const updateSlice = createSlice({
  name: "updateBlood",
  initialState,
  reducers: {
    showCardUpdate(state) {
      if (state.code === 0) {
        console.log("u need to pick one");
        state.selected = true
      } else {
        state.showUpdate = !state.showUpdate;
        state.selected = false
      }
    },
    getBlood(state, action) {
      state.blood = action.payload
    },
    getCodeBlood(state, action) {
      state.code = action.payload
    },
    getBloodGrp(state, action) {
      state.bloodGrp = action.payload
    },
    getRhesus(state, action) {
      state.rhesus = action.payload
    },
  },
});

const updateReducer = updateSlice.reducer;
export const updateActions = updateSlice.actions;

export default updateReducer;
