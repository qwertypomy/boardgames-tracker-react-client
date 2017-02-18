import React from 'react';
import * as Redux from 'react-redux';

import BoardList from 'BoardList';
import ControlPanel from 'ControlPanel';

///////////////////
// It should not be.
import {login} from 'actions';
///////////////////
///////////////////
export class BGRoom extends React.Component {
  render () {
    ////////////////////
    // It should not be.
    let {dispatch} = this.props;
    dispatch(login('123ascsf', 'User'));
    ////////////////////

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
