const fs = require('fs')


const updateUsers = (users) => fs.writeFileSync('./userData.json', JSON.stringify(users, null, 2))


module.exports = updateUsers;
