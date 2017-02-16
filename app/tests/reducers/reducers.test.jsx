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
            id: 'df89567uy89e',
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
          id: 'djfhiu8247yn',
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

  });
});
