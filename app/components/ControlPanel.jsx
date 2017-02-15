import React from 'react';
import * as Redux from 'react-redux';

export class ControlPanel extends React.Component {
  render () {
    return (
        <div className="off-canvas position-left reveal-for-large" id="sidebar">
          <div className="sidebar-item"><i className="fa fa-home fa-3x" aria-hidden="true"></i></div>
          <div className="sidebar-item"><i className="fa fa-plus fa-3x" aria-hidden="true"></i></div>
          <div className="sidebar-item"><i className="fa fa-times fa-3x" aria-hidden="true"></i></div>
        </div>
    );
  };
};

export default Redux.connect()(ControlPanel);
