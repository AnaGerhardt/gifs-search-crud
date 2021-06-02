import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "./loading.slice";
import gifsReducer from "./gifs.slice";

const allReducers = {
  loading: loadingReducer,
  gifs: gifsReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
