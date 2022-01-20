import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { TState } from '../entities.ts';
import { fetchGoodsAction } from '../thunk';

const initialState: TState = {
  loading: false,
  data: null,
  error: null,
  cart: [],
};

export const mainPageSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addInCart: (state, { payload }) => {
      const finded = state.cart.find((order) => order.id === payload.id);
      !finded ? state.cart.push({ ...payload, count: 1 }) : (finded.count += 1);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return {
        ...state,
        ...payload.main,
      };
    },
    [fetchGoodsAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchGoodsAction.fulfilled.type]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    [fetchGoodsAction.rejected.type]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { addInCart } = mainPageSlice.actions;

export default mainPageSlice.reducer;
