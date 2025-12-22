import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/toggleMenuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
