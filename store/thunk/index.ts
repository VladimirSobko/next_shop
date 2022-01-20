import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGoodsAction = createAsyncThunk(
  'http://localhost:4200/goods',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:4200/goods');
      const goods = await response.json();
      return goods;
    } catch (error) {
      return rejectWithValue(JSON.parse(JSON.stringify(error)));
    }
  },
);
