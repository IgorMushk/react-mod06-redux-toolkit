import { createReducer } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from './actions';
import { statusFilters } from './constants';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

// Отвечает только за обновление свойства tasks
// Теперь значением параметра state будет массив задач
// export const tasksReducer = (state = tasksInitialState, action) => {
//     switch (action.type) {
//       case addTask.type:
//         return [...state, action.payload];
//       case deleteTask.type:
//         return state.filter(task => task.id !== action.payload);
//       case toggleCompleted.type:
//         return state.map(task => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return { ...task, completed: !task.completed };
//         });
//       default:
//         return state;
//     }
//   };
export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteTask]: (state, action) => {
    return state.filter(task => task.id !== action.payload);
  },
  [toggleCompleted]: (state, action) => {
    return state.map(task => {
      if (task.id !== action.payload) {
        return task;
      }
      return { ...task, completed: !task.completed };
    });
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};

// Отвечает только за обновление свойства filters
// Теперь значением параметра state будет объект фильтров
// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };
export const filtersReducer = createReducer(tasksInitialState, {
 [setStatusFilter]: (state, action) =>{
      return {
        ...state,
        status: action.payload,
      };
 }
});

// // Код редюсеров tasksReducer и filtersReducer
// export const rootReducer = (state = {}, action) => {
//   // Возвращаем объект состояния
//   return {
//     // Обоим редюсерам передаем только часть состояния за которую они отвечают
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };
