import { createAction, nanoid } from "@reduxjs/toolkit";

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
