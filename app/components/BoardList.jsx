import React from 'react';
import * as Redux from 'react-redux';

import Board from 'Board';

export class BoardList extends React.Component {
  render () {
    return (
        <div className="board-list">
          <h2>BoardList component</h2>
          <Board/>
        </div>
    );
  };
};

export default Redux.connect(
  
)(BoardList);
