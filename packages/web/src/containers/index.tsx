import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Developer, Error, Home, Login, Projects } from "./pages";
import { TradulabRouter, AuthMiddleware, RoleMiddleware } from "./routes";
import { TradulabHeader } from "../components";

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route component={Error} exact path="/error" />
      <Route component={Login} exact path="/login" />
      <TradulabRouter
        Component={Developer}
        Parent={TradulabHeader}
        middlewares={[AuthMiddleware, RoleMiddleware]}
        path="/dev"
      />
      <TradulabRouter
        Component={Projects}
        middlewares={[AuthMiddleware]}
        path="/projects"
      />
      <TradulabRouter
        Component={Home}
        Parent={TradulabHeader}
        middlewares={[AuthMiddleware]}
        path="/"
      />
    </Switch>
  </Router>
);

export default Routes;
