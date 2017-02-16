import React from 'react';
import * as Redux from 'react-redux';

export class BoardField extends React.Component {
  constructor (props) {
    super(props);
    this.renderFieldName = this.renderFieldName.bind(this);
    this.renderFieldValue = this.renderFieldValue.bind(this);
  }
  renderFieldName () {
    var {isCreator, isEditing, fieldName} = this.props;
    if (isCreator && isEditing) {
      return <input type="text" ref="fieldName" defaultValue={fieldName}/>;
    } else {
      return <p>{fieldName}</p>
    }
  }
  renderFieldValue () {
    var {isCreator, isPrivate, isEditing, fieldValue, isLocked} = this.props;
    if(((isCreator || !isPrivate) && !isLocked) || (isCreator && isEditing)) {
      return <input type="text" ref="fieldValue" defaultValue={fieldValue}/>;
    } else {
      return <p>{fieldValue}</p>
    }
  }
  render () {
    var {id, isLocked} = this.props;
    return (
      <div id={id} className="board-field">
        {this.renderFieldName()}: {this.renderFieldValue()}

        <button className="button">{isLocked?'Unlock':'Lock'}</button>
      </div>
    );
  }
};

export default Redux.connect()(BoardField);
