import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PrivateRoute, AuthRoute } from './middleware';
import Login from 'views/Login';
import Home from 'views/Home';
import Organized from 'views/Organized';

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/organized" component={Organized} />
        <AuthRoute exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default router;