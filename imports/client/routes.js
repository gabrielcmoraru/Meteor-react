import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';
import App from './App';
import MainLayout from './layouts/MainLayout';

Meteor.startup(() => {
  render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={App}/>
      {/* <Route path="/about" component={About}/> */}
    </Route>
  </Router>,
  document.getElementById('render-target')
  );
});
