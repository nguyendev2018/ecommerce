import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';

// Tạo app action (async)
export const getNewProducts = createAsyncThunk(
  // Tên action
  'newProducts',

  // Code async logic, tham số đầu tiên data là dữ liệu truyền vào khi gọi action
  async (data, { rejectWithValue }) => {
    // Gọi lên API backend
    const response = await api.apiGetProducts({sort:"createAt"});
   if(!response.success) {
    rejectWithValue(response)
   }
   return response
  }
);
