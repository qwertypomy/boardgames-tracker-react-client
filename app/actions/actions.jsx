export var addBoard = (uid, name) => {
  return {
    type: 'ADD_BOARD',
    uname: name,
    uid
  };
};

export var addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  };
};

export var login = (uid, name) => {
  return {
    type: 'LOGIN',
    uid,
    name
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};
