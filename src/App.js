import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const App = ({ store }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React + Redux Apps Training</h1>
    </header>
    <p className="counter-app">
      Example of a Counter with some Redux
    </p>
    <Counter value={store.getState()}
      onIncrement={() => {
        store.dispatch({
          type: 'INCREMENT'
        })
      }}
      onDecrement={() => {
        store.dispatch({
          type: 'DECREMENT'
        })
      }} />
    <div className="todo-app">
      <p>Todo App with Redux</p>
    </div>
    <TodoApp />
  </div>
)

const TodoApp = () => (
  <form className="todo-form">
    <input />
    <button onClick={(e) => {
      alert("clicked");
    }}>
      Add todo
    </button>
  </form>
)

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div className="counter-app-container">
    <h1>{value}</h1>
    <div className="button-wrapper">
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  </div>
)

export default App;
