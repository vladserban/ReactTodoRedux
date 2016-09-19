import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    const todoRef = firebaseRef.child('todos').push(todo);
    console.log("STAGE 1");

    return todoRef.then(
      () => {
        console.log("STAGE 2");

        dispatch(addTodo({
          ...todo,
          id: todoRef.key
        }));
      },
      (err) => {
        console.log("STAGE 3 ERROR", err);
      }
    );
  };
};


export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then( () => {
      dispatch(updateTodo(id, updates));
    });
  };
};
