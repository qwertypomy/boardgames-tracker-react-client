import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {

  it('should generate ADD_BOARD action', () => {
    const action = {
      type: 'ADD_BOARD',
      uid: 'someuserid2345e5643',
      uname: 'Jack'
    };
    const res = actions.addBoard(action.uid, action.uname);
    expect(res).toEqual(action);
  });

  it('should generate UPDATE_BOARD action', () => {
    const action = {
      type: 'UPDATE_BOARD',
      boardId: 'abc123',
      boardName: 'New board name',
      fields: [
        {
          id: 'df89567uy89e',
          fieldName: 'class',
          fieldValue: 'Orc',
          isLocked: true
        },
      ]
    };

    const res = actions.updateBoard(action.boardId, action.boardName, action.fields);
    expect(res).toEqual(action);
  });

  it('should generate DELETE_BOARD action', () => {
    const action = {
      type: 'DELETE_BOARD',
      boardId: '1234kdfafs'
    };
    const res = actions.deleteBoard(action.boardId);
    expect(res).toEqual(action);
  });

  it('should generate TOGGLE_PRIVATE_BOARD action', () => {
    const action = {
      type: 'TOGGLE_PRIVATE_BOARD',
      boardId: '1234kdfafs'
    };
    const res = actions.togglePrivateBoard(action.boardId);
    expect(res).toEqual(action);
  });

});
