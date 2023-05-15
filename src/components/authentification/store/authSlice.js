import { createSlice } from "@reduxjs/toolkit";

const role = localStorage.getItem("role") !== null ? JSON.parse(localStorage.getItem("role")) : "";

const initialState = { role: role, showAlertLogin: false, showAlertSignUp: false, isLoggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getRole(state, action) {
      state.role = action.payload;
      localStorage.setItem("role", JSON.stringify(state.role))
    },
    changeAlertStateLog(state){
        state.showAlertLogin = !state.showAlertLogin
    },
    changeAlertStateSign(state){
        state.showAlertSignUp = !state.showAlertSignUp
    },
    changeLoginStatus(state){
      state.isLoggedIn = true
    },
    changeLogoutStatus(state){
      state.isLoggedIn = false
    }
  },
});

const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export default authReducer;
