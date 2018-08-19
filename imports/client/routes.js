import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';
import App from './App';
Meteor.startup(() => {
  render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('render-target')
  );
});
