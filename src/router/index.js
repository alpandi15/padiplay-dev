import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Login from 'views/Auth/Login'
import Register from 'views/Auth/Register'
import Home from 'views/Home'
import Games from 'views/Games'
import Blog from 'views/Blog'
import About from 'views/About'
import Organized from 'views/Organized'
import Account from 'views/Account'
import { PrivateRoute, AuthRoute, PublicRoute } from './middleware'

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute exact path="/login" component={Login} title="Login" />
        <AuthRoute exact path="/register" component={Register} title="Register" />
        <PublicRoute exact path="/" component={Home} title="Home" />
        <PublicRoute exact path="/games" component={Games} title="Games" />
        <PublicRoute exact path="/blog" component={Blog} title="Blog" />
        <PublicRoute exact path="/about" component={About} title="About" />
        <PrivateRoute exact path="/account" component={Account} title="Account" />
        <PrivateRoute exact path="/organized" component={Organized} title="Organized" />
      </Switch>
    </BrowserRouter>
  )
}

export default router
