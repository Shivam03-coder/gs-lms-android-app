import { combineReducers } from "@reduxjs/toolkit";
import { globalState } from "./state";
import { ApiServices } from "./middleware/apiservices";

const RootReducers = combineReducers({
  global: globalState.reducer,
  [ApiServices.reducerPath]: ApiServices.reducer,
});

export default RootReducers;
