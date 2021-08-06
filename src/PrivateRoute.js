import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { isExpired } from 'react-jwt'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  return (
    <Route {...rest}>
      { console.log(localStorage) }
      {isExpired(localStorage.getItem('jwtToken')) === false ?
        <Component />
      :
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      }
    </Route>
  );
};

export default PrivateRoute;