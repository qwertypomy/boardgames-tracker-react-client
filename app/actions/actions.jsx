//###### Boards actions ######//

export var addBoard = (uid, uname) => {
  return {
    type: 'ADD_BOARD',
    uid,
    uname
  };
};

export var updateBoard = (boardId, boardName, fields) => {
  return {
    type: 'UPDATE_BOARD',
    boardId,
    boardName,
    fields
  };
};

export var deleteBoard = (boardId) => {
  return {
    type: 'DELETE_BOARD',
    boardId
  };
};

export var togglePrivateBoard = (boardId) => {
  return {
    type: 'TOGGLE_PRIVATE_BOARD',
    boardId
  };
};

export var toggleEditBoard = (boardId) => {
  return {
    type: 'TOGGLE_EDIT_BOARD',
    boardId
  };
};

export var toggleAddField = (boardId) => {
  return {
    type: 'TOGGLE_ADD_FIELD',
    boardId
  };
};

export var addField = (boardId, fieldName, fieldValue) => {
  return {
    type: 'ADD_FIELD',
    boardId,
    fieldName,
    fieldValue
  };
};

export var updateFieldValue = (boardId, fieldId, fieldValue) => {
  return {
    type: 'UPDATE_FIELD_VALUE',
    boardId,
    fieldId,
    fieldValue
  };
};

export var deleteField = (boardId, fieldId) => {
  return {
    type: 'DELETE_FIELD',
    boardId,
    fieldId
  };
};

export var toggleLockField = (boardId, fieldId) => {
  return {
    type: 'TOGGLE_LOCK_FIELD',
    boardId,
    fieldId
  };
};

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
