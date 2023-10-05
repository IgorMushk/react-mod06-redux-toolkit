//import { createAction, nanoid } from "@reduxjs/toolkit";

// export const addTask = createAction("tasks/addTask", text => {
//   return {
//     payload: {
//       text,
//       id: nanoid(),
//       completed: false,
//     },
//   };
// });

//export const deleteTask = createAction("tasks/deleteTask");

//export const toggleCompleted = createAction("tasks/toggleCompleted");

//export const setStatusFilter = createAction("filters/setStatusFilter");

// У генератора экшена есть свойство type
//console.log(addTask.type); // "tasks/AddTask"

// Метод toString() функции addTask был переопределен
//console.log(addTask.toString()); // "tasks/AddTask"

//------------------------------------------------------------------------------------
// Генераторы экшенов теперь создаются автоматически для каждого слайса. 
// Это значит, что нам больше не нужно вручную объявлять их в отдельном файле 
// используя createAction(). Мы можем удалить файл actions.js и обновить импорты генераторов экшенов в файлах компонентов. Структура файлов проекта теперь будет выглядеть следующим образом.


// Импорты генераторов экшенов делаются из соответствующего файла слайса.

// //=============== Before ========================
// // import { deleteTask, toggleCompleted } from "redux/actions";
// //=============== After ========================
// import { deleteTask, toggleCompleted } from "redux/tasksSlice";