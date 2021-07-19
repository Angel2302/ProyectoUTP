// src/App.js

import React from "react";
import  "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import Category from "./Category";
import Members from "./Members";
import Home from "./Home";
import Admin from "./Admin";
import Login from "./Login";
import Forgot from "./Forgot";
import Products from "./Products";
import PrivateRoute from "./PrivateRoute";
import { Form } from "react-bootstrap";
import Formulario from "./Formulario";




export default function App() {
  return (
    <div> 
      <nav class="navbar  navbar-expand-md navbar-light bg-secondary">
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
          <div class="navbar navbar-expand-xl bg-dark">
              <ul class="navbar-nav mr-auto" >
                <li>
                  <Link to="/Home" class= "nav-link h5 text-white">Home</Link>
                </li>
                    
                    
                <li>
                <Link to="/category" class= "nav-link h5 text-white">Category</Link>
                </li>
                  
                <li>            
                    <Link to="/login" class= "nav-link h5 text-white" >Login</Link>        
                </li>              
                    
              </ul>
          </div>
          {/* <div class="mx-auto order-0">
              <a class="navbar-brand mx-auto" href="#">Navbar 2</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                  <span class="navbar-toggler-icon"></span>
              </button>
          </div> */}
          <div class="navbar navbar-expand-xl w-100 bg-dar ">
              <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/members" class= "nav-link h5" >Members</Link>
              </li>
                  
              </ul>
          </div>
       </nav>
      

        <Switch>
          <Route Exact path="/home"><Home /></Route>
          <Route path="/" exact><Home /></Route>
          <Route path="/category"><Category /></Route>
          <Route path="/members"><Members /></Route>          
          <Route path="/login"><Login/></Route>
          <Route path="/formulario"><Formulario/></Route> 
          <Route path="/admin"><Admin/></Route>
          <Route path="/forgot"><Forgot/></Route>
          <Route path="/category/products"><Products/></Route>
        </Switch>
    </div>
  );
};
