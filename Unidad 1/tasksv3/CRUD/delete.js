const getTasks = require("./read");
const writeTasks = require("./writeJSON");

function deleteTask(title) {
  const tasks = getTasks();
  writeTasks(tasks.filter((task) => task.title != title));
}

module.exports = deleteTask;