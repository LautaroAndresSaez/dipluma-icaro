

const deleteUser = (users, {username, email}) => {
    const newUsers = users.filter(user => user.username !== username && user.email !== email);
    if(newUsers.length === users.length) {
        throw new Error("El usuario no existe!");
    }
    return newUsers;
}


module.exports = deleteUser