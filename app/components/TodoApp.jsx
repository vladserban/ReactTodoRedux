var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Facut curatenie'
        },
        {
          id: 2,
          text: 'Mers la botosani'
        },
        {
          id: 3,
          text: 'Terminat berea'
        },
        {
          id: 4,
          text: 'Dat cu matura'
        }
      ]
    }
  },

  render: function(){
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
