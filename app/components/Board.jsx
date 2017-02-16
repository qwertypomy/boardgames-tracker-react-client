import React from 'react';
import * as Redux from 'react-redux';

import BoardField from 'BoardField';

export class Board extends React.Component {
  constructor (props) {
    super(props);
    this.renderFields = this.renderFields.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }
  renderFields () {
    var {auth, uid, fields, isPrivate, isEditing} = this.props;
    const isCreator = auth.uid === uid;

    return fields.map((field) => {
      return(
        <BoardField key={field.id} isCreator={isCreator} isPrivate={isPrivate} isEditing={isEditing} {...field}/>
      );
    });
  }
  renderButtons () {
    var {auth, uid, isEditing, isNewField} = this.props;
    if (auth.uid === uid) {
      return <div className="board-buttons">
        <button className="button" className="button" className="button">Lock</button>
        <button className="button" className="button" className="button">Add</button>
        {isEditing?<button className="button" className="button" className="button">Save</button> : <button className="button" className="button" className="button">Edit</button>}
        <button className="button" className="button" className="button">Delete</button>
      </div>;
    }
  }

  render () {
    var {id, boardName} = this.props;
    return (
      <div className="board" id={id}>
        <h3>{boardName}</h3>
        {this.renderButtons()}
        {this.renderFields()}
      </div>
    );
  }
};

export default Redux.connect((state) => {
  var auth = state.auth;
  return {auth};
})(Board);
