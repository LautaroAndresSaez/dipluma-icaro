

const getBestUsers = (users) => {
    return users.filter(({games, userActive}) => {
        return games.length > 2 && userActive
    })
}


module.exports = getBestUsers;