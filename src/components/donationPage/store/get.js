import { createSlice } from "@reduxjs/toolkit";

const initialGetState = { typeIdentity: "", NumIdentity: "", counteur: 1 };
const getSlice = createSlice({
  name: "get",
  initialState: initialGetState,
  reducers: {
    modifcounteur(state) {
      state.counteur++;
    },
    getNum(state, action) {
      const adresse = action.payload;
      state.NumIdentity = adresse;
    },
    getType(state, action) {
      const Name = action.payload;
      state.typeIdentity = Name;
    },
  },
});

const GetReducerr = getSlice.reducer;
export const GetActions = getSlice.actions;

export default GetReducerr;
