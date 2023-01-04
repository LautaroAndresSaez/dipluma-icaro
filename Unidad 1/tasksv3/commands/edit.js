const edit = (title, desc, tasks) => {
  const index = tasks.findIndex((task) => task.title);
  if (index === -1) {
    return tasks;
  }
  tasks[index].desc = desc;
  return tasks;
};

module.exports = edit;
