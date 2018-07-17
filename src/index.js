import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const counter = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state +1 ;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

const Render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
registerServiceWorker();

store.subscribe(Render);
Render();