import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./features/contactSlice";

export const store = configureStore({
  reducer: {
    contacts: contactSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
