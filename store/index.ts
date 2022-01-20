import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import mainReducer from './slices/main';

export const makeStore = () =>
  configureStore({
    reducer: {
      main: mainReducer,
    }
  });


export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore, {debug: true});

