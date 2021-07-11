// src/App.js

import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Category from "./Category";
import Members from "./Members";
import Login from './Login';
import PrivateRoute from "./PrivateRoute";
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Admin = () => (
  <div>
    <h2>Welcome admin!</h2>
  </div>
);

export default function App() {
  return (
    <div color="red"> 
      <nav className="navbar navbar-light" >
        <ul className="nav navbar-nav" >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
          <li>
            <button>
              <Link to="/admin">Admin area</Link>
            </button>
            
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/category"><Category /></Route>
        <Route path="/members"><Members /></Route>
        <Route path="/login"><Login /></Route>
        <PrivateRoute path="/admin" component={Admin} />
      </Switch>
    </div>
  );
};
