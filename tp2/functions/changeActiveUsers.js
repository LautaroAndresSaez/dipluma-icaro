

const changeActiveUsers = (users) => {
    return users.map(mapUser);
}

const mapUser = ({ userActive, ...rest }) => ({
    ...rest,    
    userActive: rest.age < 18 ? false : userActive
}) 


module.exports = changeActiveUsers; 