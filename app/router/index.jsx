import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import BGRoom from 'BGRoom';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="bgroom" component={BGRoom}/>
    </Route>
  </Router>
);
