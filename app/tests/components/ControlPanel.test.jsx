import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import * as configureStore from 'configureStore';
import {ControlPanel} from 'ControlPanel';

describe('ControlPanel', () => {
  it('should exist', () => {
    expect(ControlPanel).toExist();
  });

});