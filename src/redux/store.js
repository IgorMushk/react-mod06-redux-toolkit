import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer, tasksReducer } from './reducer';
//import { rootReducer } from './reducer';

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
