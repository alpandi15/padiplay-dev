import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute, AuthRoute } from './middleware';
import Login from 'views/Login';
import Home from 'views/Home';
import Games from 'views/Games';
import Blog from 'views/Blog';
import About from 'views/About';
import Organized from 'views/Organized';

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/organized" component={Organized} />
        <AuthRoute exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default router;