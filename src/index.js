// ----- DEP IMPORTS -----
import React from 'react';
import ReactDOM from 'react-dom';
// Provider is from the react-redux library, and is technically a component
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// ----- APP IMPORTS -----
import App from './components/app';
import reducers from './reducers';

// Provider wraps our App component and takes care of the store
// it takes the result of createStore as a prop called 'store'
ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
