import { statusFilters } from './constants';

const tasksInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ];

// Отвечает только за обновление свойства tasks
// Теперь значением параметра state будет массив задач
export const tasksReducer = (state = tasksInitialState, action) => {
    switch (action.type) {
      case "tasks/addTask":
        return [...state, action.payload];
      case "tasks/deleteTask":
        return state.filter(task => task.id !== action.payload);
      case "tasks/toggleCompleted":
        return state.map(task => {
          if (task.id !== action.payload) {
            return task;
          }
          return { ...task, completed: !task.completed };
        });
      default:
        return state;
    }
  };

const filtersInitialState = {
  status: statusFilters.all,
};

// Отвечает только за обновление свойства filters
// Теперь значением параметра state будет объект фильтров
export const filtersReducer = (state = filtersInitialState, action) => {
    switch (action.type) {
      case "filters/setStatusFilter":
        return {
          ...state,
          status: action.payload,
        };
      default:
        return state;
    }
  };

// // Код редюсеров tasksReducer и filtersReducer
// export const rootReducer = (state = {}, action) => {
//   // Возвращаем объект состояния
//   return {
//     // Обоим редюсерам передаем только часть состояния за которую они отвечают
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };
