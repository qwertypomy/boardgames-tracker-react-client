import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

var store = require('configureStore').configure();
import router from 'app/router/';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
