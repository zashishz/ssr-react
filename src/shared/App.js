import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import NotFound from "./404";
import Navbar from "./Navbar";

const App = () => (
  <div>
    <Navbar />
    <Switch>
      {routes.map(({ path, exact, component: C, ...rest }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          render={props => <C {...props} {...rest} />}
        />
      ))}
      <Route render={props => <NotFound {...props} />} />
    </Switch>
  </div>
);

export default App;
