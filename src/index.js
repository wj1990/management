import React from 'react';
import {render} from 'react-dom';
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import Router from './router';
import App from './App';
import store from './store';

render((
	<Provider store={store}>
		<Router>
			<Route path="/" component={App}></Route>
		</Router>
	</Provider>
),document.getElementById('root'))