import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';

// Tạo app action (async)
export const getCategories = createAsyncThunk(
  // Tên action
  'categories',

  // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
  async (data, { rejectWithValue }) => {
    // Gọi lên API backend
    const response = await api.apiGetCategories();
    console.log(response);
   if(!response.success) {
    rejectWithValue(response)
   }
   return response
  }
);
