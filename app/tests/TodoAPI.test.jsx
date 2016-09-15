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
});
