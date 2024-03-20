import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./Nav/Nav";
import Body from "./Body/Body";
import Resume from "./pages/Resume";
import Home from "./pages/Home";

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};
