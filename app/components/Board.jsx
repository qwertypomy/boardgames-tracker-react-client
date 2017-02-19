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
      <div className="small-10 small-centered columns">
        <input type="text" ref="boardNameText" defaultValue={boardName} onChange={
            () => dispatch(actions.updateBoardName(boardId, this.refs.boardNameText.value))
          }/>
      </div>
      : <div className="small-10 small-centered columns"><h3 className="board-name">{boardName}</h3></div>

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
      <div className="board large-4 medium-6 small-12 columns" key={boardId}>
        <div calssName="row">
          {boardNameInterface}
          {controlButtons}
          {fieldsInterface}
          {addNewFieldInterface}
        </div>
      </div>
    );
  }
};

export default Redux.connect((state) => {
  let auth = state.auth;
  return {auth};
})(Board);
