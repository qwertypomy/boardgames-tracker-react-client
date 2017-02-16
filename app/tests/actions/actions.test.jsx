import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate ADD_BOARD action', () => {
    const action = {
      type: 'ADD_BOARD',
      board: {
        boardName: 'Player 1',
        fields: [
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
    let res = actions.addBoard(action.board);
    expect(res).toEqual(action);

  });
});
