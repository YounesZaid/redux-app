import React from 'react';
import logo from './logo.svg';
import './App.css';


const App = ({ store }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React & Redux Test</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      Time to understand some <code>REDUX</code> and MOVE ON !
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
  </div>
)


const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

export default App;
