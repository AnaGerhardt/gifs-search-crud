import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const gifsSlice = createSlice({
  initialState,
  name: "gifs",
  reducers: {
    setGifs: (state, action) => {
      return action.payload;
    },
    loadGifs: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setGifs, loadGifs } = gifsSlice.actions;
export default gifsSlice.reducer;
