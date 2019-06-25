import React from 'react';
import { Router, Route} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import HomePage from '../components/homePage';
import CallbackPage from '../components/callback';
import store from './store';


const history = syncHistoryWithStore(createBrowserHistory(), store);


export default function Routes(props) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage} />
      <Route path="/callback" component={CallbackPage} />
    </Router>
  );
}