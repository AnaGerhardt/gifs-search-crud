import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const gifSlice = createSlice({
  initialState,
  name: "gifs",
  reducers: {
    saveGif: (state, action) => {
      state.push({
        title: action.payload.title,
        image: action.payload.title,
      });
    },
    editGif: (state, action) => {
      state.map((item) => {
        if (item.title === action.payload.title) {
          item.title = action.payload.newTitle;
        }
        return item;
      });
    },
    deleteGif: (state, action) => {
      state.filter((item) => {
        return item.title !== action.payload.title;
      });
    },
  },
});

export const { saveGif, editGif, deleteGif } = gifSlice.actions;
export default gifSlice.reducer;
