import React from 'react';
import * as Redux from 'react-redux';

export class Board extends React.Component {
  render () {
    return (
      <div>
        <h3>Board component</h3>
      </div>
    );
  };
};

export default Redux.connect()(Board);
