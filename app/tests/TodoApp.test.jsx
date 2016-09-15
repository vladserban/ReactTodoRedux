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

  it("should add a new todo to the state", () => {

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({ todos: [] });

    var todoText = 'Za new todo';
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

  });

  it("should toggle completed state", () => {

    var todoData = {
      id: 11,
      text: 'Test task',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
      todos: [todoData]
    });

    // check that todos first item completed flag is false
    expect(todoApp.state.todos[0].completed).toBe(false);

    // toggle it
    todoApp.handleToggle(11);

    // check toggle result
    expect(todoApp.state.todos[0].completed).toBe(true);

  });

});
