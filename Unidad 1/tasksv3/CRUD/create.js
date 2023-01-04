const getTasks = require('./read');
const writeTasks = require('./writeJSON');


function create(task) {
    const tasks = getTasks();
    tasks.push(task);
    writeTasks(tasks);
}

module.exports = create;