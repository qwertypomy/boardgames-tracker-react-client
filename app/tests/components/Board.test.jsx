import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import * as configureStore from 'configureStore';
import {Board} from 'Board';

describe('Board', () => {
  it('should exist', () => {
    expect(Board).toExist();
  });

});
