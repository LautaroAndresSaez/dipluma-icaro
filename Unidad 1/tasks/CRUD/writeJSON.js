const fs = require('fs');

function writeJSON(json){
    const jsonString = JSON.stringify(json, null, 2);
    return fs.writeFileSync('./tasksData.json', jsonString);
}

module.exports = writeJSON;