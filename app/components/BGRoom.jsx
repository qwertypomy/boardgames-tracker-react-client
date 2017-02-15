import React from 'react';
import * as Redux from 'react-redux';

export class BGRoom extends React.Component {
  render () {
    return (
      <div>
        <h1>BGRoom component</h1>
      </div>
    );
  };
};

export default Redux.connect()(BGRoom);
