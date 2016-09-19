var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var expect = require('expect');

import {Todo} from 'Todo';
import * as actions from 'actions';

describe("Todo", () => {
  it("should exist", () => {
    expect(Todo).toExist();
  });


  it("should dispatch startToggleTodo action on click (aka toggle)", () => {
    var todoData = {
      id: 119,
      text: 'just another task',
      completed: true,
      createdAt: 2344,
      completedAt: 3244
    };
    var action = actions.startToggleTodo(todoData.id, !todoData.completed);

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);

    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);

  });
});
