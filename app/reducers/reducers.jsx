import { combineReducers } from 'redux';

export var boardsReducer = (state = [], action) => {
  switch (action.type) {

    case 'ADD_BOARD':
      const boardName = action.uname + "'s board";
      return [
        ...state,
        {
          boardId: Math.random(),
          uid: action.uid,
          boardName,
          fields: [], // ТАК ДОЛЖНО БЫТЬ!!!
          isEditing: true,
          isPrivate: true,
          isNewField: true
        }
      ];

    case 'UPDATE_BOARD':
      return state.map((board) => {
        if( board.boardId===action.boardId) {
          return {
            ...board,
            boardName: action.boardName,
            fields: action.fields
          }
        } else {
          return board;
        }
      });

    case 'UPDATE_FIELD_VALUE':

    case 'DELETE_BOARD':

    case 'TOGGLE_LOCK_BOARD':

    case 'TOGGLE_EDIT':

    case 'TOGGLE_ADD':

    case 'ADD_FIELD':
      return state.map((board) => {
        return board.boardId===action.boardId
          ? board.fields.push(
            {
              id: Math.random(),
              fieldName: '',
              fieldValue: '',
              isLocked: false
            }
          )
          : board;
      });

    case 'UPDATE_FIELD_VALUE':

    case 'DELTE_FIELD':

    case 'TOGGLE_LOCK_FIELD':

    default:
      return state;
  }
};

export var usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state,
        {
          uid: action.uid,
          name: action.uname
        }
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
