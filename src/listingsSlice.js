import { createSlice } from "@reduxjs/toolkit";

export const listingsSlice = createSlice({
  name: "listings",
  initialState: {
    items: [],
  },
  reducers: {
    setListings: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setListings } = listingsSlice.actions;

export default listingsSlice.reducer;
