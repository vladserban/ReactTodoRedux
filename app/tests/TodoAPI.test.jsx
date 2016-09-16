var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe("TodoAPI", () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe("setTodos", () => {
    beforeEach( () => {
      localStorage.removeItem('todos');
    });

    it("should set valid todos array", () => {
      var todos = [
        {
          id: 32,
          text: 'Lorem ipsum',
          completed: false
        }
      ];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid data', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });


  describe("getTodos", () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual( [] );
    });

    it('should return valid array of todos if good data in localStorage', () => {
      var todos = [
        {
          id: 32,
          text: 'Lorem ipsum',
          completed: false
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);

    });
  });

  describe("filterTodos", () => {
    var todos = [
      {
        id: 1,
        text: 'First todo',
        completed: true
      },
      {
        id: 2,
        text: 'Other todo',
        completed: false
      },
      {
        id: 3,
        text: 'Last First todo',
        completed: true
      }
    ];

    it("should return all items if showCompleted is true", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(todos.length);
    });


    it("should return only non-completed todos", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it("should sort by completed status (non-completed first)", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it("should show all items if searchText is empty", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });

    it("should show only matching items with searchText", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'first');
      expect(filteredTodos.length).toBe(2);
    });

  });
});
