import { configureStore } from "@reduxjs/toolkit";
import popularApi from "./popularApi";
import searchApi from "./searchApi";
import searchSlice from "./searchSlice";
import authApi from "./auth";
import tokenSlice from "./tokenSlice";
import dashboardApi from "./dashboardApi";

const store = configureStore({
  reducer: {
    [popularApi.reducerPath]: popularApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    search: searchSlice.reducer,
    token: tokenSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(popularApi.middleware)
      .concat(searchApi.middleware)
      .concat(authApi.middleware)
      .concat(dashboardApi.middleware);
  },
});

export default store;
