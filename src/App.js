import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './uielements/Button';
import { TodoList } from './TodoComponents/TodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input:'',
      todos:[]
    }
  }
  handleChangeInput = (event) => {
    const value = event.target.value;
    this.setState({input: value})
  }
  handleAddItem = () => {
    
    const newItem = {
      id: new Date(),
      text: this.state.input,
      status: false
    }
    this.setState({
      input: '',
      todos: this.state.todos.concat(newItem)
    })

  }

  handleItemStatusToggle = (itemId) => {
    const tempState = this.state.todos.map(todo => {
      if(todo.id === itemId) {
        todo.status = !todo.status
      }
      return todo;      
    })
    this.setState({
      todos: tempState
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }

  handleItemRemove = (itemId) => {
    const tempState = this.state.todos.filter(todo => {
      if(todo.id !== itemId) {
        return todo
      }
    })
    this.setState({
      todos: tempState
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }



render() { 
  console.log(this.state.todos)
  return (
    <div className="container">
    <h1>Our awesome TODO</h1>

    <div className="todo-component">
    <div className="todo-component__control">
    <div className="todo-component__input-grup">
    <input onChange={this.handleChangeInput} value={this.state.input} type="text" id="todo-input" placeholder="Add todo" />
              {this.state.input.length ? (
                <span id="input-count">Characters count: {this.state.input.length}</span>
              ) : null}
              <span id="total"></span>
    <span id="total-done"></span>
    
    </div>
    <Button onClick = {this.handleAddItem} id="todo-add">Add</Button>
    
    </div>
    <TodoList handleItemRemove={this.handleItemRemove} handleItemStatusToggle={this.handleItemStatusToggle} todos={this.state.todos} />
    </div>
    </div>
  );
}
}

export default App;
