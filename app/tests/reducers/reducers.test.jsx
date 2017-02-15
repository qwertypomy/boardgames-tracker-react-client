import expect from 'expect';
var df = require('deep-freeze-strict');

import * as reducers from 'reducers';

describe('Reducers', () => {
  it('should add new board', () => {
    const action = {
      type: 'ADD_BOARD',
      board: {
        boardName: 'Player 1',
        boardFields: [
          {
            fieldName: 'lvl',
            fieldValue: 8,
            isLocked: false
          },
          {
            fieldName: 'class',
            fieldValue: 'Orc',
            isLocked: true
          }
        ],
        isEditing: false,
        isPrivate: false,
        isNewField: false
      }
    };

    let res = reducers.boardsReducer(undefined, df(action));
    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(action.board);
  });
});
