import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "~pages/Home";
import NotFound from "~pages/NotFound";

const Routes = () => (
	<div className="app">
		<Switch>
			<Route exact path="/" component={Home} />
			<Route component={NotFound} />
		</Switch>
	</div>
);

export default Routes;
