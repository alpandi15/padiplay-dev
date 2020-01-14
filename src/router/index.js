import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Login from 'views/Auth/Login'
import Register from 'views/Auth/Register'
import Home from 'views/Home'
import Games from 'views/Games'
import Blog from 'views/Blog'
import About from 'views/About'
import Organized from 'views/Organized'
import AccountProfile from 'views/Account/profile'
import AccountProfileEdit from 'views/Account/profile/edit'
import AccountTeam from 'views/Account/team'
import AccountTournament from 'views/Account/tournament'
import AccountTransaction from 'views/Account/transaction'
import AccountSetting from 'views/Account/settings'
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

        <PrivateRoute exact path="/account/profile" component={AccountProfile} title="Account" />
        <PrivateRoute exact path="/account/profile/edit" component={AccountProfileEdit} title="Account" />
        <PrivateRoute exact path="/account/team" component={AccountTeam} title="Team" />
        <PrivateRoute exact path="/account/tournament" component={AccountTournament} title="Tournament" />
        <PrivateRoute exact path="/account/transaction" component={AccountTransaction} title="Transaction" />
        <PrivateRoute exact path="/account/settings" component={AccountSetting} title="Settings" />
        <PrivateRoute exact path="/organizer" component={Organized} title="Organized" />
      </Switch>
    </BrowserRouter>
  )
}

export default router
