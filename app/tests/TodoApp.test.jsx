var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var expect = require('expect');

var TodoApp = require('TodoApp');

describe("TodoApp", () => {
  it("should exist", () => {
    expect(TodoApp).toExist();
  });

  if("should add a new todo to the state", () => {

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [] });

    var todoText = 'Za new todo';
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

  });
});
