import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: { search: "" },
  reducers: {
    getQueryString(state, { payload }) {
      state.search = payload;
    },
  },
});
export const { getQueryString } = searchSlice.actions;
export default searchSlice;
