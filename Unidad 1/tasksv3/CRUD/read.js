const fs = require("fs");

function getTasks() {
  const jsonString = fs.readFileSync("./tasksData.json");
  return JSON.parse(jsonString);
}

module.exports = getTasks;
