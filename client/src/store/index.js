// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

export const store = configureStore({
  reducer: {
    app: appSlice  // Khai báo 1 slide tên là user với giá trị là userReducer được export ở file userSlice
    // Có thể khai báo nhiều slide khác tương tự
  }
});