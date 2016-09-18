var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var expect = require('expect');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo';


describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoList).toExist();
  });

  it("should render the correct number of Todos", () => {
    var todos = [{
      id: 1,
      text: 'first',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    },{
      id: 2,
      text: 'second one',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];

    var store = configure({
      todos // todos: todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    )
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);

  });
});
