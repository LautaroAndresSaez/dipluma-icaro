const { getTasks } = require("../CRUD/read");

const deleteTask = (title) => {
  const tasks = getTasks();
  return tasks.filter((task) => task.title != title);
};

module.exports = deleteTask;
