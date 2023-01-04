

const filterUsersByCoutry = (users, country) => {
    country = country.toLowerCase();
    return users.filter(user => user.country.toLowerCase() === country)
}

module.exports = filterUsersByCoutry;