import React from 'react';
import * as Redux from 'react-redux';

export class BoardField extends React.Component {
  render () {
    var {isCreator, isPrivate, isEditing, id, fieldName, fieldValue, isLocked} = this.props;
    return (
      <div id={id} className="board-field">
        {
            <p>{fieldName}: {fieldValue}</p>

            // <div>
            //   <input type="text" ref="fieldName" placeholder={fieldName}/>
            //   <input type="text" ref="fieldValue" placeholder={fieldValue}/>
            // </div>

        }
        <button className="button" className="button" className="button">Lock</button>
      </div>
    );
  }
};

export default Redux.connect()(BoardField);
