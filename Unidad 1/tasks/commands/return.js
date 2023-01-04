const { getTasks } = require("../CRUD/read.js");

const returnTask = (title) => {
  const tasks = getTasks();
  return tasks
    .filter((task) => task === title)
    .map(({ desc }) => desc)
    .at(0);
};

module.exports = returnTask;