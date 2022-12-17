import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './action/itemsSlice'

export const store = configureStore({
  reducer: {
    items:itemsSlice,
  },
});
