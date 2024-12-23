// src/app/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import RootReducers from "./rootreducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ApiServices } from "./middleware/apiservices";

export const store = configureStore({
  reducer: RootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(ApiServices.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
