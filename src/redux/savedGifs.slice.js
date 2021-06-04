import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const savedGifsSlice = createSlice({
  initialState,
  name: "savedGifs",
  reducers: {
    saveGif: (state, action) => {
      state.push({
        title: action.payload.title,
        image: action.payload.image,
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
      return state.filter((item) => item.title !== action.payload.title);
    },
  },
});

export const { saveGif, editGif, deleteGif } = savedGifsSlice.actions;
export default savedGifsSlice.reducer;
