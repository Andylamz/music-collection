import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "tokenSlice",
  initialState: {
    token: null,
    isLoggedIn: false,
    favouriteList: [],
  },
  reducers: {
    setToken(state, { payload }) {
      state.token = payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.favouriteList = [];
    },
    setFavouriteList(state, { payload }) {
      state.favouriteList = payload;
    },
  },
});

export const { setToken, logout, setFavouriteList } = tokenSlice.actions;
export default tokenSlice;
