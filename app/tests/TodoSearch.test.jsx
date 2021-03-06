var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var expect = require('expect');

import {TodoSearch} from 'TodoSearch';

describe("TodoSearch", () => {
  it("should exist", () => {
    expect(TodoSearch).toExist();
  });

  it("should dispatch SET_SEARCH_TEXT action on search", () => {
    var todoTestSearchText = "Abc";
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: todoTestSearchText
    };

    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.searchText.value = todoTestSearchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });


  it("should dispatch TOGGLE_SHOW_COMPLETED on clicking checkbox", () => {

    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });

});
