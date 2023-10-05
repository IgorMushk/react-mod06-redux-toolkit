export const statusFilters = {
    all: "all",
    active: "active",
    completed: "completed",
  };
  
//   export const statusFilters = Object.freeze({
//     all: "all",
//     active: "active",
//     completed: "completed",
//   });

// OBJECT.FREEZE()
// Используем метод Object.freeze() для того, чтобы «заморозить» объект значений фильтра и предотвратить случайное его изменение по ссылке в местах импорта.