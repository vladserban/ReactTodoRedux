var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var expect = require('expect');

var Todo = require('Todo');

describe("Todo", () => {
  it("should exist", () => {
    expect(Todo).toExist();
  });


  it("should fire onToggle with the correct id on click", () => {
    var todoData = {
      id: 119,
      text: 'just another task',
      completed: true
    };

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);

    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(119);

  });
});
