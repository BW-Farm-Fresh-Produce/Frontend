import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Redux
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducer from './reducers';


const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);