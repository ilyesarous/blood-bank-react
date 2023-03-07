import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bloods: [],
  show: false,
  alert: false,
};

const bloodSlice = createSlice({
  name: "blood",
  initialState,
  reducers: {
    showCard(state) {
      state.show = !state.show;
    },

    addBlood(state, action) {
      const newBlood = action.payload;
      axios
        .post("http://localhost:9005/blood-bank/blood", {
          bloodGrp: newBlood[0],
          bloodType: newBlood[1],
          givenTo: newBlood[2],
          receivedFrom: newBlood[3],
          userCreate: newBlood[4],
        })
        .then((res) => {
          if (res.data === "") {
            console.log("can't add!");
            state.alert = true
          } else {
            console.log("added");
            state.alert = false
          }
        });
    },
    getChecked(state) {
      state.checked = !state.checked;
    }
  },
});

const bloodReducer = bloodSlice.reducer;
export const bloodActions = bloodSlice.actions;

export default bloodReducer;
