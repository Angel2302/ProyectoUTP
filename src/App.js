// src/App.js

import React from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import Category from "./Category";
import Members from "./Members";
import Home from "./Home";
import Login from './Login';
import PrivateRoute from "./PrivateRoute";

const Admin = () => (
  <div>
    <h2>Welcome admin!</h2>
  </div>
);

export default function App() {
  return (
    <div > 
      <nav class="navbar navbar-expand-sm font-weigtth-bold bg-dark" >
        <ul class="nav navbar-nav" >
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
          <li>            
              <Link to="/admin">Login</Link>        
          </li>
        </ul>
      </nav>

      <Switch>
        <Route Exact path="/Home"><Home /></Route>
        <Route path="/category"><Category /></Route>
        <Route path="/members"><Members /></Route>
        <Route path="/login"><Login /></Route>
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </div>
  );
};
