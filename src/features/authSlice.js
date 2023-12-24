import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isSuccess:false,
  role:"",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
        console.log(action.payload.role);
      state.token = action.payload.token;
      state.isSuccess=true ;
      state.role=action.payload.role;
    },
    logOut: (state) => {
      localStorage.clear();
      state.token = "";
      state.isSuccess=false;
      state.role = "";
    },
  },
}); 

export const { loginSuccess, logOut } = authSlice.actions;
export default authSlice.reducer;