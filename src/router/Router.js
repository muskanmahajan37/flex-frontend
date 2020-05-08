import React from "react";

// Pages and components
import HomeScreen from '../views/HomeScreen'
import LoginScreen from '../views/LoginScreen'
import RegisterScreen from '../views/RegisterScreen'

// React-Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </Switch>
  </BrowserRouter>
);

export default Router;
