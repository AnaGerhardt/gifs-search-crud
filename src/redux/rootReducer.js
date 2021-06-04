import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "./loading.slice";
import savedGifsReducer from "./savedGifs.slice";
import gifsReducer from "./gifs.slice";

const allReducers = {
  loading: loadingReducer,
  savedGifs: savedGifsReducer,
  gifs: gifsReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
