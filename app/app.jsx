import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

var actions = require('actions');
var store = require('configureStore').configure();

import firebase from 'app/firebase/';
import router from 'app/router/'

// check login status
firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    store.dispatch( actions.doLogin(user.uid) );
    store.dispatch( actions.startAddTodos() );
    hashHistory.push('/todos');
  } else {
    store.dispatch( actions.doLogout() );
    hashHistory.push('/');
  }
});



// load foundation
$(document).foundation();

// load custom css (via webpack alias)
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);
