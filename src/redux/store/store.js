// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsReducer from '../features/productsSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    // Diğer reducer'ları buraya ekleyebilirsiniz
  },
  middleware: [thunk],
});
