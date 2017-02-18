import { combineReducers } from 'redux';

export var boardsReducer = (state = [], action) => {
  switch (action.type) {

    case 'ADD_BOARD':
      const boardName = action.uname + "'s board";
      return [
        ...state,
        {
          boardId: Math.floor(Math.random()*100000),
          uid: action.uid,
          boardName,
          fields: [], // ТАК ДОЛЖНО БЫТЬ!!!
          isEditing: false,
          isPrivate: true
        }
      ];

    case 'UPDATE_BOARD_NAME':
      return state.map((board) => {
        if( board.boardId===action.boardId) {
          return {
            ...board,
            boardName: action.boardName
          };
        } else {
          return board;
        }
      });

    case 'DELETE_BOARD':
      return state.filter((board) => {
        return board.boardId!==action.boardId;
      });

    case 'TOGGLE_PRIVATE_BOARD':
    return state.map((board) => {
      if( board.boardId===action.boardId) {
        return {
          ...board,
          isPrivate: !board.isPrivate
        };
      } else {
        return board;
      }
    });

    case 'TOGGLE_EDIT_BOARD':
      return state.map((board) => {
        if( board.boardId===action.boardId) {
          return {
            ...board,
            isEditing: !board.isEditing
          };
        } else {
          return board;
        }
      });

    case 'ADD_FIELD':
      return state.map((board) => {
        if( board.boardId===action.boardId) {
          return {
            ...board,
            fields: [
              ...board.fields,
              {
                fieldId: Math.floor(Math.random()*100000),
                fieldName: '',
                fieldValue: '',
                isLocked: false
              }
            ]
          };
        } else {
          return board;
        }
      });

    case 'UPDATE_FIELD_VALUE':
      return state.map((board) => {
        if( board.boardId===action.boardId) {
          return {
            ...board,
            fields: board.fields.map((field) => {
              if(field.fieldId===action.fieldId) {
                return {
                  ...field,
                  fieldValue: action.fieldValue
                };
              } else {
                return field;
              }
            })
          };
        } else {
          return board;
        }
      });

      case 'UPDATE_FIELD_NAME':
        return state.map((board) => {
          if( board.boardId===action.boardId) {
            return {
              ...board,
              fields: board.fields.map((field) => {
                if(field.fieldId===action.fieldId) {
                  return {
                    ...field,
                    fieldName: action.fieldName
                  };
                } else {
                  return field;
                }
              })
            };
          } else {
            return board;
          }
        });

    case 'DELETE_FIELD':
      return state.map((board) => {
        if(board.boardId===action.boardId) {
          return {
            ...board,
            fields: board.fields.filter((field) => {
              return field.fieldId!==action.fieldId;
              })
          };
        } else {
          return board;
        }
      });

    case 'TOGGLE_LOCK_FIELD':
      return state.map((board) => {
        if( board.boardId===action.boardId) {
          return {
            ...board,
            fields: board.fields.map((field) => {
              if(field.fieldId===action.fieldId) {
                return {
                  ...field,
                  isLocked: !field.isLocked
                };
              } else {
                return field;
              }
            })
          };
        } else {
          return board;
        }
      });

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
