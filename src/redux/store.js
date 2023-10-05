import { configureStore } from '@reduxjs/toolkit';
//=============== Before ========================
//import { filtersReducer, tasksReducer } from './reducer';
//=============== After ========================
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";


export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
