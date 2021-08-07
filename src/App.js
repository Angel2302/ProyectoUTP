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
import Docs from "./Docs";
import PrivateRoute from "./PrivateRoute";
import Formulario from "./Formulario";
import RecoverPassword from "./RecoverPassword";

export default function App() {
  return (
    <div> 
      <nav className="navbar  navbar-expand-md navbar-dark bg-secondary">
          <div>
            <a className="navbar-brand" >
              { <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plant" width="64" height="64" viewBox="0 0 24 24" strokeWidth="2" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" />
                  <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
                  <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
                  <line x1="12" y1="15" x2="12" y2="9" />
                </svg>}
            </a>
          </div> 
          <div className="navbar navbar-expand-xl  ">
              <ul className="navbar-nav mr-auto" >
                <li>
                  <Link to="/Home" className= "nav-link h5 ">Home</Link>
                </li>
                    
                    
                <li>
                  <Link to="/category" className= "nav-link h5 ">Category</Link>
                </li>
                  
                <li>            
                    <Link to="/login" className= "nav-link h5 " >Login</Link>        
                </li>              
                    
              </ul>
          </div>
          {/* <div className="mx-auto order-0">
              <a className="navbar-brand mx-auto" href="#">Navbar 2</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                  <span className="navbar-toggler-icon"></span>
              </button>
          </div> */}
          <div className="navbar navbar-expand-xl w-100 bg-dar ">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/members" className= "nav-link h5" >Members</Link>
              </li>
                  
              </ul>
          </div>
       </nav>
      
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/" exact><Home /></Route>
          <Route path="/category"><Category /></Route>
          <Route path="/members"><Members /></Route>          
          <Route path="/login"><Login/></Route>
          <Route path="/formulario"><Formulario/></Route> 
          <PrivateRoute path="/admin" component={ Admin }></PrivateRoute>
          <Route path="/forgot"><Forgot/></Route>
          <Route path="/products/:categoria"><Products/></Route>
          <Route path="/Docs"><Docs/></Route>
          <Route path="/recover-password/:token"><RecoverPassword/></Route>
        </Switch>
    </div>
  );
};
