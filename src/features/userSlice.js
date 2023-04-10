import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    // Login & logout actions can make changes to user Store Slice 
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions; // to send some action to store

export const selectUser = (state) => state && state.user && state.user.user; //selector =  to get some info of user store

export default userSlice.reducer;
