const getTasks = require("../CRUD/read");

const find = (titleOrDescription) => {
  const tasks = getTasks();
  return tasks.some(
    ({ title, desc }) =>
      title === titleOrDescription || desc === titleOrDescription
  );
};

module.exports = find;
