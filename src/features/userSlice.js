import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading: true, // Add isLoading state
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoading = false; // Update isLoading to false after login
    },
    logout: (state) => {
      state.user = null;
      state.isLoading = false; // Update isLoading to false after logout
    },
  },
});

export const { login, logout } = userSlice.actions; // to send some action to store

export const selectUser = (state) => state && state.user && state.user.user; //selector =  to get some info of user store

export default userSlice.reducer;
