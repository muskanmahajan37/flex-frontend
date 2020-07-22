import React from 'react';

// Pages and components
import HomeScreen from '../views/HomeScreen';
import LoginScreen from '../views/LoginScreen';
import RegisterScreen from '../views/RegisterScreen';
import NotFoundScreen from '../views/NotFoundScreen';
import CategoryScreen from '../views/CategoryScreen';
import SubcategoryScreen from '../views/SubcategoryScreen';
import ProfileScreen from '../views/ProfileScreen';
import ServiceScreen from '../views/ServiceScreen';
import AddServiceScreen from '../views/AddServiceScreen';
import EditProfile from '../views/EditProfile';

// React-Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={HomeScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/categories/:category' exact component={CategoryScreen} />
      <Route
        path='/categories/:category/:subcategory'
        exact
        component={SubcategoryScreen}
      />
      <Route path='/:user' exact component={ProfileScreen} />
      <Route path='/:user/:service' exact component={ServiceScreen} />
      <Route path='/:user/services/new' exact component={AddServiceScreen} />
      <Route path='/:user/profile/edit' exact component={EditProfile} />
      <Route path='*' component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);

export default Router;
