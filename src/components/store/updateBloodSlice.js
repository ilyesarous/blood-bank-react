import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bloods: [],
  showUpdate: false,
  selected: false,
  code: 0,
};
const updateSlice = createSlice({
  name: "updateBlood",
  initialState,
  reducers: {
    updateBlood(state, action) {
      const newBlood = action.payload;
      axios.put(`http://localhost:9005/blood-bank/blood/${state.code}`, {
        codeBlood: newBlood[0],
        bloodGrp: newBlood[1],
        bloodType: newBlood[2],
        givenTo: newBlood[3],
        receivedFrom: newBlood[4],
      });
    },
    updateBloodStatus(state) {
      axios.put(`http://localhost:9005/blood-bank/blood/status/${state.code}`).then(()=>{
        console.log("updated")
      });
    },
    showCardUpdate(state) {
      if (state.code === 0) {
        console.log("u need to pick one");
        state.selected = true
      } else {
        state.showUpdate = !state.showUpdate;
        state.selected = false
      }
    },
    getCodeBlood(state, action) {
      state.code = action.payload;
    },
  },
});

const updateReducer = updateSlice.reducer;
export const updateActions = updateSlice.actions;

export default updateReducer;
