var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Login  from 'Login';
import TodoApp from 'TodoApp';
import TodoAPI from 'TodoAPI';

var actions = require('actions');
var store = require('configureStore').configure();

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
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
