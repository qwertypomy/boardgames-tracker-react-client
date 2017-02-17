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
        isEditing: true,
        isPrivate: true,
        isNewField: true
      };
      const res = reducers.boardsReducer(undefined, df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toInclude(board);
    });

    it('should update existing board', () => {
      const board = {
        boardId: 'sdfjuiau453i',
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
      const action = {
        type: 'UPDATE_BOARD',
        ...board
      };
      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [],
          isEditing: false,
          isPrivate: false,
          isNewField: false
        },
        {
          boardId: 'djfhiu8247yn',
          userId: 'someuserid3458832sj',
          boardName: 'Super board',
          fields: [],
          isEditing: false,
          isPrivate: true,
          isNewField: false
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[0]).toInclude(board);
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
          isPrivate: false,
          isNewField: false
        },
        {
          boardId: 'djfhiu8247yn',
          userId: 'someuserid3458832sj',
          boardName: 'Super board',
          fields: [],
          isEditing: false,
          isPrivate: true,
          isNewField: false
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
          isPrivate: false,
          isNewField: false
        },
        {
          boardId: 'djfhiu8247yn',
          userId: 'someuserid3458832sj',
          boardName: 'Super board',
          fields: [],
          isEditing: false,
          isPrivate: true,
          isNewField: false
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
          isPrivate: false,
          isNewField: false
        },
        {
          boardId: 'djfhiu8247yn',
          userId: 'someuserid3458832sj',
          boardName: 'Super board',
          fields: [],
          isEditing: false,
          isPrivate: true,
          isNewField: false
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[1].isEditing).toEqual(!boards[1].isEditing);
    });

    it('should toggle isNewField', () => {
      const action = {
        type: 'TOGGLE_ADD_FIELD',
        boardId: 'djfhiu8247yn'
      };

      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [],
          isEditing: false,
          isPrivate: false,
          isNewField: false
        },
        {
          boardId: 'djfhiu8247yn',
          userId: 'someuserid3458832sj',
          boardName: 'Super board',
          fields: [],
          isEditing: false,
          isPrivate: true,
          isNewField: false
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[1].isNewField).toEqual(!boards[1].isNewField);
    });

    it('should add field', () => {
      const field = {
        fieldName: 'lvl',
        fieldValue: '25'
      };

      const action = {
        type: 'ADD_FIELD',
        boardId: 'djfhiu8247yn',
        ...field
      };

      const boards = [
        {
          boardId: 'sdfjuiau453i',
          uid: 'someuserid2345e5643',
          boardName: "Jack's board",
          fields: [],
          isEditing: false,
          isPrivate: false,
          isNewField: false
        },
        {
          boardId: 'djfhiu8247yn',
          userId: 'someuserid3458832sj',
          boardName: 'Super board',
          fields: [],
          isEditing: false,
          isPrivate: true,
          isNewField: false
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[1].fields.length).toEqual(1);
      expect(res[1].fields[0]).toInclude(field);
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
          isPrivate: false,
          isNewField: false
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[0].fields[0].fieldValue).toEqual(action.fieldValue);
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
          isPrivate: false,
          isNewField: false
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
          isPrivate: false,
          isNewField: false
        }
      ];

      const res = reducers.boardsReducer(df(boards), df(action));
      expect(res[0].fields[0].isLocked).toEqual(!boards[0].fields[0].isLocked);
    });

  });
});
