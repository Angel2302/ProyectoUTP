import React, { useState } from "react";
import { Link, Redirect, useLocation } from "react-router-dom"; 
import { isExpired } from 'react-jwt'

import axios from "axios";

export default function Login() {

  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/admin" } };

  const[datos, setDatos] = useState({
    username: "",
    password: ""
  })

  function login() {
    axios.post('/users/login',
      datos
    ).then(res => {
      if(!res.data.message) {
        localStorage.setItem('jwtToken', res.data.token);
        window.location.replace('');
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

  if (!isExpired(localStorage.getItem('jwtToken'))) { 
    return  <Redirect to={from} />;
  } 

  return (
    <div className= "container justify-content-center ">
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
              name="username" />
            <label className="form-label h5">Username</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input 
              type="password" 
              id="form2Example2" 
              className="form-control"
              onChange={ handleInputChange }
              name="password" />
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
          </div>
        </form>
    </div>
  );
}
