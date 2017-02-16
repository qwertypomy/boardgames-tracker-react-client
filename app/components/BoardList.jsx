import React from 'react';
import * as Redux from 'react-redux';

import Board from 'Board';

export class BoardList extends React.Component {
  render () {
    var {boards} = this.props;

    var renderBoards = () => {
      if(boards) {
        return boards.map((board) => {
          return (
            <Board key={board.id} {...board}/>
          );
        });
      } else {
        return <h3>No Bords :(</h3>
      }
    };

    return (
        <div className="board-list">
          {renderBoards()}
        </div>
    );
  }
};

export default Redux.connect((state) => state.room)(BoardList);
