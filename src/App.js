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
    <div> 
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a class="navbar-brand" >
              { <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plant" width="64" height="64" viewBox="0 0 24 24" stroke-width="2" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" />
                  <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
                  <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
                  <line x1="12" y1="15" x2="12" y2="9" />
                </svg>}
            </a>
          </div> 
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
              <ul class="navbar-nav mr-auto" >
              <li>
                <Link to="/Home" class= "nav-link">Home</Link>
              </li>
                  
                  
            <li>
            <Link to="/category" class= "nav-link">Category</Link>
            </li>
              
            <li>            
                <Link to="/admin" class= "nav-link" >Login</Link>        
            </li>    
                  
              </ul>
          </div>
          {/* <div class="mx-auto order-0">
              <a class="navbar-brand mx-auto" href="#">Navbar 2</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div> */}
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/members" class= "nav-link" >Members</Link>
              </li>
                  
              </ul>
          </div>
       </nav>
      {/* <nav class="navbar navbar-inverse"  >
        
        
        <a class="navbar-brand" href="#">
         { <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plant" width="64" height="64" viewBox="0 0 24 24" stroke-width="2" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" />
            <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
            <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
            <line x1="12" y1="15" x2="12" y2="9" />
          </svg>}
        </a>
      
        <ul class="nav navbar-nav mr-auto">
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
