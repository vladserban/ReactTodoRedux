var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  }
};


// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED
export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};


export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case 'TOGGLE_TODO':
      return state.map( (todo) => {
        if( todo.id === action.id ){
          var alteredTodo = {...todo, completed: !todo.completed};
          if (todo.completed === false) {
            alteredTodo = {...alteredTodo, completedAt: moment().unix()};
          } else {
            alteredTodo = {...alteredTodo, completedAt: undefined};
          }
          return alteredTodo;
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
