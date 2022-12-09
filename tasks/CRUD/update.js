const getTasks = require("./read");
const writeTasks = require("./writeJSON");

function update(title, desc) {
  const tasks = getTasks();
  const updatedTasks = tasks.map((task) => {
    if (task.title === title) {
      return {
        title,
        desc,
      };
    }
    return task;
  });
  writeTasks(updatedTasks);
}

module.exports = update;
