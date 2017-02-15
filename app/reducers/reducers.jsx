export var boardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state,
        action.board
      ];
    default:
      return state;
  }
};
