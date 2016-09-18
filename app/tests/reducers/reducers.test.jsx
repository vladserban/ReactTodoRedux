var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {

      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Dog'
      };

      var res = reducers.searchTextReducer( df(''), df(action) );

      expect(res).toEqual(action.searchText);

    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted flag', () => {

      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      var res = reducers.showCompletedReducer( df(false), df(action) );

      expect(res).toEqual(true);

    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };

      var res = reducers.todosReducer( df([]), df(action) );

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var actionDog = {
        type: 'TOGGLE_TODO',
        id: 123
      };
      var actionCat = {
        type: 'TOGGLE_TODO',
        id: 124
      };

      var todos = [
        {
          id: 123,
          text: 'Walk dog',
          completed: false,
          createdAt: 999,
          completedAt: undefined
        },
        {
          id: 124,
          text: 'Pet cat',
          completed: true,
          createdAt: 999,
          completedAt: 1098
        },
      ];

      var resDog = reducers.todosReducer( df(todos), df(actionDog) );

      expect(resDog[0].completed).toBe(true);
      expect(resDog[0].completedAt).toNotBe(undefined);

      var resCat = reducers.todosReducer( df(todos), df(actionCat) );

      expect(resCat[1].completed).toBe(false);
      expect(resCat[1].completedAt).toBe(undefined);

    });
  });


});
