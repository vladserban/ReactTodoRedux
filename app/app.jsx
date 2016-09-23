var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

import {hashHistory} from 'react-router';

var actions = require('actions');
var store = require('configureStore').configure();

import firebase from 'app/firebase/';
import router from 'app/router/'


firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

// store.subscribe( () => {
//   var state = store.getState();
//   console.log('New state', store.getState());
//   TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch( actions.startAddTodos() );


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
