var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('authReducer', () => {
    it('should set auth uid on LOGIN', () => {
      var action = {
        type: 'LOGIN',
        uid: 'abc123'
      };

      var res = reducers.authReducer( df({}), df(action) );

      expect(res).toEqual({
        uid: 'abc123'
      });
    });

    it('should clear auth uid on LOGOUT', () => {
      var action = {
        type: 'LOGOUT'
      };

      var state = {
        uid: 'something'
      };

      var res = reducers.authReducer( df(state), df(action) );

      expect(res).toEqual({});
    });

  });

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
        todo: {
          id: '123abc',
          text: 'Some task',
          completed: false,
          createdAt: 3300
        }
      };

      var res = reducers.todosReducer( df([]), df(action) );

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });




    it('should update todo', () => {
      var todos = [
        {
          id: 123,
          text: 'Walk dog',
          completed: false,
          createdAt: 999,
          completedAt: undefined
        }
      ];

      var updates = {
        completed: true,
        completedAt: 984784
      }

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer( df(todos), df(action) );

      expect(res[0]).toInclude({
        id: action.id,
        text: todos[0].text,
        completed: updates.completed,
        completedAt: updates.completedAt
      });
    });




    it('should add batch todos', () => {
      var todos = [
        {
          id: 123,
          text: 'anything',
          completed: false,
          completedAt: undefined,
          createdAt: 33000
        }
      ];
      var action = {
        type: 'ADD_TODOS',
        todos: todos
      };

      var res = reducers.todosReducer( df([]), df(action) );

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);

    });


    it('should clear todos at logout', () => {
      var todos = [
        {
          id: 123,
          text: 'anything',
          completed: false,
          completedAt: undefined,
          createdAt: 33000
        }
      ];
      var action = {
        type: 'LOGOUT'
      };

      var res = reducers.todosReducer( df(todos), df(action) );

      expect(res.length).toEqual(0);
    });

  });


});
