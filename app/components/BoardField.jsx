import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class BoardField extends React.Component {
  render () {
    var {dispatch, boardId, isPrivate, isCreator, fieldId,
      isEditing, fieldName, fieldValue, isLocked} = this.props;

    const fieldNameInterface = isCreator && isEditing? (
      <input type="text" ref="fieldName" placeholder="Field name"
        defaultValue={fieldName} onChange={() =>
          dispatch(actions.updateFieldName(boardId, fieldId, this.refs.fieldName.value))
        }/>
    ) : <p>{fieldName}</p>;

    const fieldValueInterface = ((isCreator || !isPrivate) && !isLocked) ||
      (isCreator && isEditing)? (
        <input type="text" ref="fieldValue" placeholder="Field value"
          defaultValue={fieldValue} onChange={ () =>
          dispatch(actions.updateFieldValue(boardId, fieldId, this.refs.fieldValue.value))
        }/>
      ): <p>{fieldValue}</p>;

    const lockFieldInterface = isEditing? null :
      <button className="button" onClick={ () =>
          dispatch(actions.toggleLockField(boardId, fieldId))
        }>{isLocked?'Unlock':'Lock'}</button>;

    return (
      <div id={fieldId} className="board-field">
        {fieldNameInterface}:{fieldValueInterface}
        {lockFieldInterface}

        <button className="button" onClick={ () =>
            dispatch(actions.deleteField(boardId, fieldId))
          }>Delete</button>
      </div>
    );
  }
};

export default Redux.connect()(BoardField);
