import expect from 'expect';
var df = require('deep-freeze-strict');

import * as reducers from 'reducers';

describe('Reducers', () => {
  describe('boardsReducer', () => {

    it('should add new board', () => {
      const action = {
        type: 'ADD_BOARD',
        uid: 'someuserid2345e5643',
        uname: 'Jack'
      };
      const board = {
        uid: action.uid,
        boardName: (action.uname + "'s board"),
        fields: [],
        isEditing: false,
        isPrivate: true
      };
      const res = reducers.boardsReducer(undefined, df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toInclude(board);
    });

    it('should update board name', () => {
      const action = {
        type: 'UPDATE_BOARD_NAME',
        boardId: 'sdfjuiau453i',
        boardName: 'New board name'
      };
      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [],
          isEditing: false,
          isPrivate: false
        },
        {
          boardId: 'djfhiu8247yn',
          userId: 'someuserid3458832sj',
          boardName: 'Super board',
          fields: [],
          isEditing: false,
          isPrivate: true
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[0].boardName).toEqual(action.boardName);
    });

    it('should delete board', () => {
      const action = {
        type: 'DELETE_BOARD',
        boardId: 'sdfjuiau453i'
      };

      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [],
          isEditing: false,
          isPrivate: false
        },
        {
          boardId: 'djfhiu8247yn',
          userId: 'someuserid3458832sj',
          boardName: 'Super board',
          fields: [],
          isEditing: false,
          isPrivate: true
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res.length).toEqual(boards.length - 1);
      expect(res[0]).toEqual(boards[1]);

    });

    it('should toggle isPrivate', () => {
      const action = {
        type: 'TOGGLE_PRIVATE_BOARD',
        boardId: 'djfhiu8247yn'
      };

      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [],
          isEditing: false,
          isPrivate: false
        },
        {
          boardId: 'djfhiu8247yn',
          userId: 'someuserid3458832sj',
          boardName: 'Super board',
          fields: [],
          isEditing: false,
          isPrivate: true
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[1].isPrivate).toEqual(!boards[1].isPrivate);
    });

    it('should toggle isEditing', () => {
      const action = {
        type: 'TOGGLE_EDIT_BOARD',
        boardId: 'djfhiu8247yn'
      };

      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [],
          isEditing: false,
          isPrivate: false
        },
        {
          boardId: 'djfhiu8247yn',
          userId: 'someuserid3458832sj',
          boardName: 'Super board',
          fields: [],
          isEditing: false,
          isPrivate: true
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[1].isEditing).toEqual(!boards[1].isEditing);
    });


    it('should add field', () => {

      const action = {
        type: 'ADD_FIELD',
        boardId: 'djfhiu8247yn'
      };

      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [],
          isEditing: false,
          isPrivate: false
        },
        {
          boardId: 'djfhiu8247yn',
          userId: 'someuserid3458832sj',
          boardName: 'Super board',
          fields: [],
          isEditing: false,
          isPrivate: true
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[1].fields.length).toEqual(1);
    });

    it('should update field value', () => {
      const action = {
        type: 'UPDATE_FIELD_VALUE',
        boardId: 'sdfjuiau453i',
        fieldId: '7q9834ywdhad',
        fieldValue: 'OVER9000'
      };

      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [
            {
              fieldId: '7q9834ywdhad',
              fieldName: 'lvl',
              fieldValue: 8,
              isLocked: false
            }
          ],
          isEditing: false,
          isPrivate: false
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[0].fields[0].fieldValue).toEqual(action.fieldValue);
    });

    it('should update field name', () => {
      const action = {
        type: 'UPDATE_FIELD_NAME',
        boardId: 'sdfjuiau453i',
        fieldId: '7q9834ywdhad',
        fieldName: 'New field name'
      };

      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [
            {
              fieldId: '7q9834ywdhad',
              fieldName: 'lvl',
              fieldValue: 8,
              isLocked: false
            }
          ],
          isEditing: false,
          isPrivate: false
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[0].fields[0].fieldName).toEqual(action.fieldName);
    });

    it('should delete field', () => {

      const action = {
        type: 'DELETE_FIELD',
        boardId: 'sdfjuiau453i',
        fieldId: '7q9834ywdhad'
      };

      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [
            {
              fieldId: '7q9834ywdhad',
              fieldName: 'lvl',
              fieldValue: 8,
              isLocked: false
            }
          ],
          isEditing: false,
          isPrivate: false
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      console.log(res.fields);
      expect(res[0].fields.length).toEqual(0);
    });

    it('should togggle isLocked', () => {

      const action = {
        type: 'TOGGLE_LOCK_FIELD',
        boardId: 'sdfjuiau453i',
        fieldId: '7q9834ywdhad'
      };

      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [
            {
              fieldId: '7q9834ywdhad',
              fieldName: 'lvl',
              fieldValue: 8,
              isLocked: false
            }
          ],
          isEditing: false,
          isPrivate: false
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[0].fields[0].isLocked).toEqual(!boards[0].fields[0].isLocked);
    });

  });
});
