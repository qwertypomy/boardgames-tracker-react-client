import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export class ControlPanel extends React.Component {
  render () {
    var {name, uid, dispatch} = this.props;
    return (
        <div className="off-canvas position-left reveal-for-small reveal-for-large reveal-for-medium" id="sidebar">
          <div id="home" className="sidebar-item">
            <i className="fa fa-home fa-3x" aria-hidden="true"></i>
          </div>

          <div id="add-board" className="sidebar-item" onClick={() => {
              dispatch(actions.addBoard(uid, name));
            }}>
            <i className="fa fa-plus fa-3x" aria-hidden="true"></i>
          </div>

          <div id="users" className="sidebar-item">
            <i className="fa fa-users fa-3x" aria-hidden="true"></i>
          </div>

          <div id="close-room" className="sidebar-item">
            <i className="fa fa-times fa-3x" aria-hidden="true"></i>
          </div>
        </div>
    );
  };
};

export default Redux.connect(
  (state) => {
    return state.auth;
  }
)(ControlPanel);
