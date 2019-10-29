import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getUserToken } from 'services/utils/storage';

function PrivateRoute({ component: Component, ...rest }) {
  let login = getUserToken();
  return (
    <Route
      {...rest}
      render={props =>
        login ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function AuthRoute({ component: Component, ...rest }) {
  let login = getUserToken();
  return (
    <Route
      {...rest}
      render={props =>
        !login ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export { PrivateRoute, AuthRoute };
