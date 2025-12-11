// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
  return {
    username: username,
    email: email,
    isActive: true,
    loginCount: 0,
  };
};

const incrementLogin = (user) => {
  user.loginCount += 1;
};

const deactivateUser = (user) => {
  user.isActive = false;
  delete user.email;
  return user;
};

const printUserInfo = (user) => {
  for (const key in user) {
    console.log(`${key}: ${user[key]}`);
  }
};

const cloneUser = (user) => {
  return { ...user }; 
};

module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
