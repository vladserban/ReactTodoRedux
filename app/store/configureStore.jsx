// var redux = require('redux');
import * as redux from 'redux';
import thunk from 'redux-thunk';

import * as reducers from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    auth: reducers.authReducer,
    searchText: reducers.searchTextReducer,
    showCompleted: reducers.showCompletedReducer,
    todos: reducers.todosReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
