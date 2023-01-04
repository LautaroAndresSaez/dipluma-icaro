const { getTasks } = require("../CRUD/read.js");

const filter = (text) => {
  const tasks = getTasks();
  return tasks
    .filter(({ title }) => title.includes(text))
    .map((task) => task.title);
};

module.exports = filter;
