import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Error, Login } from "./pages";
import { Developer, Home, Projects } from "./routes";

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route component={Error} exact path="/error" />
      <Route component={Login} exact path="/login" />
      <Route
        path="/dev"
        render={({ location }) => <Developer path={location.pathname} />}
      />
      <Route
        path="/projects"
        render={({ location }) => <Projects path={location.pathname} />}
      />
      <Route
        exact
        path="/"
        render={({ location }) => <Home path={location.pathname} />}
      />
    </Switch>
  </Router>
);

export default Routes;
