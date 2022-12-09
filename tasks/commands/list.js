const { getTasks } = require("../CRUD/read");

const list = () => {
  const tasks = getTasks();
  return tasks.map(({ title }) => title);
};

module.exports = list;
