import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const appInitialState = { count : 0 }
export const app = (state = appInitialState, action) => state

const RootReducer = combineReducers({app});

const store = createStore(RootReducer);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
