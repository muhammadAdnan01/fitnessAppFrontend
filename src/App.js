import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Signin from "./screens/Auth/Signin";
import Signup from "./screens/Auth/Signup";
import Dashboard from "./screens/Dashboard";
import UserInfo from "./screens/UserInformation";
import NotFound from "./screens/NotFound";
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/userInfo">
            <UserInfo />
          </Route>

          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
