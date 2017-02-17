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
          fieldId: 'df89567uy89e',
          fieldName: 'class',
          fieldValue: 'Orc',
          isLocked: true
        },
      ]
    };

    const res = actions.updateBoard(action.boardId,
      action.boardName, action.fields);
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

  it('should generate TOGGLE_EDIT_BOARD action', () => {
    const action = {
      type: 'TOGGLE_EDIT_BOARD',
      boardId: '1234kdfafs'
    };
    const res = actions.toggleEditBoard(action.boardId);
    expect(res).toEqual(action);
  });

  it('should generate TOGGLE_ADD_FIELD action', () => {
    const action = {
      type: 'TOGGLE_ADD_FIELD',
      boardId: '1234kdfafs'
    };
    const res = actions.toggleAddField(action.boardId);
    expect(res).toEqual(action);
  });

  it('should generate ADD_FIELD action', () => {
    const action = {
      type: 'ADD_FIELD',
      boardId: '1234kdfafs',
      fieldName: 'lvl',
      fieldValue: '25'
    };
    const res = actions.addField(action.boardId,
      action.fieldName, action.fieldValue);
    expect(res).toEqual(action);
  });

  it('should generate UPDATE_FIELD_VALUE action', () => {
    const action = {
      type: 'UPDATE_FIELD_VALUE',
      boardId: 'dgkjsfdkj32',
      fieldId: 'sfkjzdjkzz',
      fieldValue: '22'
    };
    const res = actions.updateFieldValue(action.boardId, action.fieldId,
       action.fieldValue);
    expect(res).toEqual(action);
  });

  it('should generate DELETE_FIELD action', () => {
    const action = {
      type: 'DELETE_FIELD',
      boardId: 'dgkjsfdkj32',
      fieldId: 'sfkjzdjkzz'
    };
    const res = actions.deleteField(action.boardId, action.fieldId);
    expect(res).toEqual(action);
  });

  it('should generate TOGGLE_LOCK_FIELD action', () => {
    const action = {
      type: 'TOGGLE_LOCK_FIELD',
      boardId: 'dgkjsfdkj32',
      fieldId: 'sfkjzdjkzz'
    };
    const res = actions.toggleLockField(action.boardId, action.fieldId);
    expect(res).toEqual(action);
  });

});
