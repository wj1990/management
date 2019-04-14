import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SetName from '../pages/SetName';
import SetAge from '../pages/SetAge';
import App from '../App';

const BasicRoute = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route exact path="/setname" component={SetName}/>
			<Route exact path="/setage" component={SetAge}/>
		</Switch>
	</Router>
);

export default BasicRoute;