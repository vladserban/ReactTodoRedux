var expect = require('expect');

var actions = require('actions');

describe("Actions", () => {

  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var res = actions.setSearchText('Some search text');

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Sample todo'
    };

    var res = actions.addTodo('Sample todo');

    expect(res).toEqual(action);
  });

  it('should generate toggle showCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggle Todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 12
    };

    var res = actions.toggleTodo(12);

    expect(res).toEqual(action);
  });
});
