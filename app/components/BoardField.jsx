import React from 'react';
import * as Redux from 'react-redux';

export class BoardField extends React.Component {
  render () {
    return (
      <div>
        <h4>BoardField component</h4>
      </div>
    );
  };
};

export default Redux.connect()(BoardField);
