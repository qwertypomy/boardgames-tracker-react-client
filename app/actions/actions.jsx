//###### Boards actions ######//

export var addBoard = (uid, uname) => {
  return {
    type: 'ADD_BOARD',
    uid,
    uname
  };
};

// updateBoard
export var updateBoard = (boardId, boardName, fields) => {
  return {
    type: 'UPDATE_BOARD',
    boardId,
    boardName,
    fields
  };
};

// deleteBoard

// toggleLockBoard

// toggleEdit

// toggleAdd


// addField

// updateFieldValue

// deleteField

// toggleLockField





//###### Users actions ######//

export var addUser = (user) => {
  return {
    type: 'ADD_USER',
    user
  };
};


//###### Auth actions ######//

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
