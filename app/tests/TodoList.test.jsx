var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var expect = require('expect');

var TodoList = require('TodoList');

describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoList).toExist();
  });
});
