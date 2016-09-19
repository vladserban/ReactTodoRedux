import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
import * as actions from 'actions';
var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '123abc',
        text: 'Anything',
        completed: false,
        createdAt: 82373
      }
    };

    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should generate ADD_TODOS action', () => {
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

    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });


  it('should create todo and dispatch ADD_TODO', (done) => {

    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then( () => {
        const actions = store.getActions();
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        });

        expect(actions[0].todo).toInclude({
          text: todoText
        });

        done();
      }).catch(done);

  });


  it('should generate toggle showCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });


  it('should generate UPDATE_TODO action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 12,
      updates: {
        completed: false
      }
    };

    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe("Tests with firebase todos", () => {
    var testTodoRef;

    beforeEach( (done) => {
      testTodoRef = firebaseRef.child('todos').push();
      testTodoRef.set({
        text: 'Something to do',
        completed: false,
        createdAt: 743764
      }).then( () => done() );
    });

    afterEach( (done) => {
      testTodoRef.remove().then( () => done() );
    });

    it('should toggleTodo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore();
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(
        () => {
            const mockActions = store.getActions();

            expect(mockActions[0]).toInclude({
              type: 'UPDATE_TODO',
              id: testTodoRef.key
            });

            expect(mockActions[0].updates).toInclude({
              completed: true
            });

            expect(mockActions[0].updates.completedAt).toExist();

            done();
        },
        done
      );
    });

  });

});
