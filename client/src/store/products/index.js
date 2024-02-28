import { createSlice } from '@reduxjs/toolkit';
import * as action from "./asynsAction";

export const productSlice = createSlice({
  name: 'newProducts',
  initialState: {
    newProducts: [],
    isLoading: false
  },
  reducers: {
    // Your synchronous reducers here, if any
  },
  extraReducers: (builder) => {
    builder
      .addCase(action.getNewProducts.pending, (state) => {
        state.isLoading = true;
      } )
      .addCase(action.getNewProducts.fulfilled, (state, action) => {
        state.isLoading = false; // Set isLoading to false on success
        state.newProducts = action.payload.data; // Assign payload to categories
      })
      .addCase(action.getNewProducts.rejected, (state, action) => {
        state.isLoading = false; // Set isLoading to false on failure
        state.errorMessage = action.error.message; // Assign error message to errorMessage
      });
  },
});
export default productSlice.reducer;
