const getTasks = require("./read");
const writeTasks = require("./writeJSON");

let nombre = "";

function create(id, name) {
  //cargar la lista de canciones
  const tasks = getTasks();
  //2- Agregar la cancion
  tasks.push({ id, nombre: name });
  //3- guardar la nueva lista
  writeTasks(tasks);

  return tasks;
}

module.exports = create;
