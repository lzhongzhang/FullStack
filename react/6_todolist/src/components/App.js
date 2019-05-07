import React from 'react';
import './App.css';
import Filter from './Filter';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: "all"
    };
  }

  addTodo = text => {
    this.setState({ todos: [...this.state.todos, {text, completed: false}] });
  }

  setFilter = newFilter => {
    this.setState({ filter: newFilter });
  }

  toggleTodo = index => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        {
          ...this.state.todos[index],
          completed: !this.state.todos[index].completed,
        },
        ...this.state.todos.slice(index + 1),
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <Filter setFilter={this.setFilter} filter={this.state.filter}/>
        <AddTodo addTodo={this.addTodo}/>
        <TodoList 
          todos={this.state.todos} 
          filter={this.state.filter}
          toggleTodo={this.toggleTodo}/>
      </div>
    );
  }
}

export default App;
