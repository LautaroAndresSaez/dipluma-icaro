const getModernUsers = (users) => {
  return users
    .filter(({ email, games }) => {
      const isGmail = email.includes("@gmail.com");
      const hasFortnite = games.includes("Fortnite");

      return hasFortnite && isGmail;
    })
    .map(({ username }) => username);
};

module.exports = getModernUsers;
