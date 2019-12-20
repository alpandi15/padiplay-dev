import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getUserToken } from 'services/utils/storage'
import TitleComponent from '../components/utils/Title'

function PrivateRoute ({ component: Component, title, ...rest }) {
  let login = getUserToken()
  return (
    <Route
      {...rest}
      render={(props) => (login ? (
        <>
          <TitleComponent title={title} />
          <Component {...props} />
        </>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      ))}
    />
  )
}

function AuthRoute ({ component: Component, title, ...rest }) {
  let login = getUserToken()
  return (
    <Route
      {...rest}
      render={(props) => (!login ? (
        <>
          <TitleComponent title={title} />
          <Component {...props} />
        </>
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location }
          }}
        />
      ))}
    />
  )
}

function PublicRoute ({ component: Component, title, ...rest }) {
  return (
    <Route {...rest}
      render={(props) => (
        <>
          <TitleComponent title={title} />
          <Component {...props} />
        </>
      )}
    />
  )
}
export { PrivateRoute, AuthRoute, PublicRoute }
