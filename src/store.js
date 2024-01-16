import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const preloadedState = {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
