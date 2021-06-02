import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const loadingSlice = createSlice({
  initialState,
  name: "loading",
  reducers: {
    loading(state, action) {
      state[action.payload] = true;
    },
    loaded(state, action) {
      state[action.payload] = false;
    },
  },
});

export const { loading, loaded } = loadingSlice.actions;
export default loadingSlice.reducer;
