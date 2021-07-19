// src/Login.js

import React, { useState } from "react";

import { Link, Route, Redirect, useLocation } from "react-router-dom";


export default function Login() {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  const [redirectToReferrer, setRedirectToReferrer] = useState(true);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(false);
    });
  };

  if (!redirectToReferrer) { 
    
    return  <Redirect to={from} />;
        
  }

  return (
    <div class= "container ">
        {/* login-form */}
        <div>
        <h3>You must log in to view the page at {from.pathname}</h3>
        </div>

        <form class= "container sm">
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label h5" for="form2Example1">Username</label>
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label h5" for="form2Example2">Password</label>
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example3"
                  unchecked
                />
                <label class="form-check-label" for="form2Example3"> Remember me </label>
              </div>
            </div>

            <div class="col">
              {/* <!-- Simple link --> */}
              <a href="/forgot">Forgot password?</a>
            </div>
          </div>

          
          

          {/* <!-- Register buttons --> */}
          <div class="text-center">
            <p>Not a member? <a href="/formulario">Register</a></p>

            {/* social media buttons ///////////////////////////*/}
            {/* <p>or sign up with:</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
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
          </div>
        </form>
        
      

      {/* <!-- Submit button --> */}
      <div class="col text-center">
      <button onClick={login} class="btn btn-success regular-button  ">
      <Link to="/admin" class= "nav-link h5 text-white" >Login</Link>
      </button>      
    			</div>
      
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