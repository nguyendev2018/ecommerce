// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import categories from "./categories";
import products from "./products";

export const store = configureStore({
  reducer: {
    categories: categories, // Khai báo 1 slide tên là user với giá trị là userReducer được export ở file userSlice
    products: products  // Khai báo 1 slide tên là user với giá trị là userReducer được export ở file userSlice
    // Có thể khai báo nhiều slide khác tương tự
  }
});