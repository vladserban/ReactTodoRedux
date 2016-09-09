var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var expect = require('expect');

var AddTodo = require('AddTodo');

describe("AddTodo", () => {
  it("should exist", () => {
    expect(AddTodo).toExist();
  });

  it("should call the spy", () => {
    var todoTestText = "A task for za spy";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);

    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoTestText
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoTestText);
  });

  it("should NOT call the spy with empty string", () => {
    var todoTestText = "";
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);

    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoTestText
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
