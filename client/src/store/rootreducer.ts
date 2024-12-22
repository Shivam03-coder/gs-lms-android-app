import { combineReducers } from "@reduxjs/toolkit";
import { globalState } from "./state";

const RootReducers = combineReducers({
  global: globalState.reducer,
});

export default RootReducers;
