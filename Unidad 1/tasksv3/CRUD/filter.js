//Tareas: array de tareas Tarea
//Tarea: tiene title y desc

/*
Archivo filter.js: esta funcionalidad retornará si encontró el valor que se le pasa por parámetro o no, esta función deberá retornar todas las tareas que contengan (en su título) lo que se le pasa por parámetro a la función.
Recordemos que ahora disponemos del método filter. Que debería facilitarnos muchísimo esta tarea.
*/

const getTasks = require("./read");

const filtrarTareas = (minititulo) => {
  const tareas = getTasks();
  const tareasFiltradas = tareas.filter((tarea) => {
    const { title } = tarea;
    return title.toLowerCase().includes(minititulo.toLowerCase());
  });
  return tareasFiltradas;
};

module.exports = filtrarTareas;
