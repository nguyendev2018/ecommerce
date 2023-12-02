import { createSlice } from '@reduxjs/toolkit';
import * as action from "./asyncAction";

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    categories: [],
    isLoading: false,
  },
  reducers: {
    // Your synchronous reducers here, if any
  },
  extraReducers: (builder) => {
    builder
      // .addCase(action.getCategories.pending, (state) => {
      //   state.isLoading = true;
      //   state.errorMessage = null; // Reset errorMessage on pending
      // })
      .addCase(action.getCategories.fulfilled, (state, action) => {
        state.isLoading = false; // Set isLoading to false on success
        state.categories = action.payload.dataCategory; // Assign payload to categories
      })
      .addCase(action.getCategories.rejected, (state, action) => {
        state.isLoading = false; // Set isLoading to false on failure
        state.errorMessage = action.error.message; // Assign error message to errorMessage
      });
  },
});

export const { /* Any synchronous actions */ } = appSlice.actions;
export default appSlice.reducer;
