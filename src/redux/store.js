import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import loadingReducer from "./loading.slice";

const store = configureStore({
  reducer: { loading: loadingReducer },
  middleware: [thunk],
});

export default store;
