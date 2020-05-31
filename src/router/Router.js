import React from "react";

// Pages and components
import HomeScreen from "../views/HomeScreen";
import LoginScreen from "../views/LoginScreen";
import RegisterScreen from "../views/RegisterScreen";
import NotFoundScreen from "../views/NotFoundScreen";
import CategoryScreen from "../views/CategoryScreen";
import SubcategoryScreen from "../views/SubcategoryScreen";

// React-Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/categories/:category" exact component={CategoryScreen} />
      <Route path="/categories/:category/:subcategory" component={SubcategoryScreen} />
      <Route path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);

export default Router;
