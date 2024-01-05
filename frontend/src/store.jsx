import { configureStore } from "@reduxjs/toolkit";
import { Apislice } from "./slices/apislices";

const store = configureStore({
  reducer: {
    [Apislice.reducerPath]: Apislice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Apislice.middleware),
  devTools: true,
});

export default store;
