import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bloods: [],
  show: false,
  alert: false,
  count: 0,
  group: "",
  rhesus: "",
  receive: "",
  given: "",
};

const bloodSlice = createSlice({
  name: "blood",
  initialState,
  reducers: {
    showCard(state) {
      state.show = !state.show;
    },
    addBlood(state, action) {
      state.bloods = [...state.bloods, action.payload];
    },

    setAlert(state) {
      state.alert = !state.alert;
    },
    setCount(state) {
      state.count++;
    },
    getChecked(state) {
      state.checked = !state.checked;
    },
    getRhesus(state, action) {
      state.rhesus = action.payload;
    },
    getReceive(state, action) {
      state.receive = action.payload.toString();
      console.log("receive: ", state.receive);
    },
    getGiven(state, action) {
      state.given = action.payload.toString();
      console.log(state.given);
    },
    getGroup(state, action) {
      state.group = action.payload;
    },
  },
});

const bloodReducer = bloodSlice.reducer;
export const bloodActions = bloodSlice.actions;

export default bloodReducer;
