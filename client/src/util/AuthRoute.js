// This Route checks if the user is loged in, redirects some routes

import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../context/auth";

function AuthRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    // If there is a user, redirects to the dashboard
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  );
}

export default AuthRoute;
