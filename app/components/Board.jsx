import React from 'react';
import * as Redux from 'react-redux';

import BoardField from 'BoardField';
import * as actions from 'actions';

export class Board extends React.Component {
  constructor (props) {
    super(props);
    this.handleAddField = this.handleAddField.bind(this);
  }

  handleAddField (e) {
    e.preventDefault();
    var {dispatch, boardId} = this.props;
    const fieldNameText = this.refs.fieldNameText.value;
    const fieldValueText = this.refs.fieldValueText.value;

    if (fieldNameText.length > 0) {
      this.refs.fieldNameText.value = '';
      this.refs.fieldValueText.value = '';
      dispatch(actions.addField(boardId, fieldNameText, fieldValueText));
    } else {
      this.refs.fieldNameText.focus();
    }
  }

  render () {
    let {dispatch, auth, boardId, boardName, uid, isEditing,
      isPrivate, fields} = this.props;

    const isCreator = auth.uid === uid;

    const boardNameInterface = isCreator && isEditing?
      <input type="text" ref="boardNameText" defaultValue={boardName} onChange={
          () => dispatch(actions.updateBoardName(boardId, this.refs.boardNameText.value))
        }/>
      : <h3>{boardName}</h3>

    const controlButtons = isCreator? (
      <div className="board-buttons">
        <button className="button" onClick={() =>
            dispatch(actions.togglePrivateBoard(boardId))
          }>{isPrivate?'Public':'Private'}</button>

          <button className="button" onClick={() =>
              dispatch(actions.toggleEditBoard(boardId))
            }>{isEditing?'Save':'Edit'}</button>

        <button className="button" onClick={() =>
            dispatch(actions.deleteBoard(boardId))
          }>Delete</button>
      </div>
    ) : null;

    const fieldsInterface = fields.map((field) => {
      return(
        <BoardField key={field.fieldId} isCreator={isCreator} isPrivate={isPrivate}
          isEditing={isEditing} boardId={boardId} {...field}/>
      );
    });

    const addNewFieldInterface = isEditing? (
      <button className="button" onClick={() =>
          dispatch(actions.addField(boardId))
        }>Add new field</button>
    ) : null;

    return (
      <div className="board" key={boardId}>
        {boardNameInterface}
        {controlButtons}
        {fieldsInterface}
        {addNewFieldInterface}
      </div>
    );
  }
};

export default Redux.connect((state) => {
  let auth = state.auth;
  return {auth};
})(Board);
