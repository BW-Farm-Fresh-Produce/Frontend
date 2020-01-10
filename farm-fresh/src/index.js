import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import App from './App';
import { createStore } from 'redux';
import {Provider} from "react-redux";
import reducer from './reducers/index';


const AppWithRouter = withRouter(App);
const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
	<Router>
		<AppWithRouter />
	</Router>
  </Provider>,
	document.getElementById('root')
);
