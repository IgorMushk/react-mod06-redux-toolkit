// import { nanoid } from "nanoid";

import { createAction, nanoid } from "@reduxjs/toolkit";

//export const addTask = createAction("tasks/addTask");
export const addTask = createAction("tasks/addTask", text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");

// У генератора экшена есть свойство type
console.log(addTask.type); // "tasks/AddTask"

// Метод toString() функции addTask был переопределен
console.log(addTask.toString()); // "tasks/AddTask"

// export const addTask = text => {
//     return {
//       type: "tasks/addTask",
//       payload: {
//         id: nanoid(),
//         completed: false,
//         text,
//       },
//     };
//   };
//   export const deleteTask = taskId => {
//     return {
//       type: "tasks/deleteTask",
//       payload: taskId,
//     };
//   };
//   export const toggleCompleted = taskId => {
//     return {
//       type: "tasks/toggleCompleted",
//       payload: taskId,
//     };
//   };
//   export const setStatusFilter = value => {
//     return {
//       type: "filters/setStatusFilter",
//       payload: value,
//     };
//   };