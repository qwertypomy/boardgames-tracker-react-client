import React from 'react';
import * as Redux from 'react-redux';

import BoardList from 'BoardList';
import ControlPanel from 'ControlPanel';

export class BGRoom extends React.Component {
  render () {
    return (
        <div className="bgroom">
          <ControlPanel/>
            <h1 className="page-title">BoardGame Room</h1>
            <BoardList/>
        </div>
    );
  };
};

export default Redux.connect()(BGRoom);
