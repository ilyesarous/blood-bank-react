import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchBlood: [] };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchBlood(state, action) {
      state.searchBlood = (action.payload);
      console.log(state.searchBlood);
    },
  },
});

const searchReducer = searchSlice.reducer;
export const searchActions = searchSlice.actions;

export default searchReducer;
