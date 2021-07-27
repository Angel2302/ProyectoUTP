import React, { useState } from "react";
import { Link, Route, Redirect, useLocation } from "react-router-dom"; 

import axios from "axios";

export default function Login() {

  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const[datos, setDatos] = useState({
    Username: "",
    Password: ""
  })

  function login() {
    axios.post('/users/login',
      datos
    ).then(res => {
      if(!res.data.message) {
        console.log(res.data);
        fakeAuth.authenticate(() => {
          setRedirectToReferrer(true);
        });
      } else {
        alert(res.data.message)
        console.log(res.data.message)
      }
    }).catch(error => {
      console.log(error);
    });
  };

  const handleInputChange =(event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value 
    })
  }

  if (redirectToReferrer) { 
    console.log(redirectToReferrer);
    return  <Redirect to={from} />;
  } 

  return (
    <div className= "container ">
        {/* login-form */}
        <div>
        <h3>You must log in to view the page at {from.pathname}</h3>
        </div>

        <form className= "container sm">
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input 
              type="email" 
              id="form2Example1" 
              className="form-control"
              onChange={ handleInputChange }
              name="Username" />
            <label className="form-label h5">Username</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input 
              type="password" 
              id="form2Example2" 
              className="form-control"
              onChange={ handleInputChange }
              name="Password" />
            <label className="form-label h5">Password</label>
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                  unchecked="true"
                />
                <label className="form-check-label"> Remember me </label>
              </div>
            </div>
            {/* <!-- Submit button --> */}
            <div className="col text-center">
              <button onClick={login} className="btn btn-success regular-button">
                <Link to="/admin" className= "nav-link h5 text-white" >Login</Link>
              </button>      
            </div>
            <div className="col">
              {/* <!-- Simple link --> */}
              <a href="/forgot">Forgot password?</a>
            </div>
          </div>

          
          

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>Not a member? <a href="/formulario">Register</a></p>
            {/* social media buttons /////////////////////////// */}
            {/* <p>or sign up with:</p> */}
           
            {/* <button type="button" class="btn btn-success btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
            </button>
            
            <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
                <i class="fab fa-github"></i>
            </button> */}
            
            {/* social media buttons /////////////////////////// */}
            
          </div>
        </form>
    </div>
  );
}

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};