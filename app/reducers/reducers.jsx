import { combineReducers } from 'redux';

export var boardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      const boardName = action.uname + "'s board";
      return [
        ...state,
        {
          id: Math.random()*100000000,
          uid: action.uid,
          boardName,
          fields: [],
          isEditing: true,
          isPrivate: true,
          isNewField: true
        }
      ];
    case 'ADD_FIELD':
      return state.map((board) => {
        const id = Math.random();
        return board.id===action.boardId? board.fields.push(
          {
            id,
            fieldName: '',
            fieldValue: '',
            isLocked: false
          }
        ) : board;
      });
    case 'CHANGE_BOARD':
      ////////
      //CODE//
      ////////
    case 'CHANGE_FIELD_VALUE':
      ///////
      //CODE//
      ////////
    default:
      return state;
  }
};

export var usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state,
        action.user
      ];
    case 'ADD_USER':
      return [
        ...state,
        action.user
      ];
    default:
      return state;
  }
};


export var roomReducer = combineReducers({
  users: usersReducer,
  boards: boardsReducer
});

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        name: action.name
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
