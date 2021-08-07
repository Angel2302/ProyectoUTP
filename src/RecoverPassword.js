import React, { Fragment, useState } from 'react';
import { Link, useParams, Redirect, useLocation } from "react-router-dom";
import { decodeToken, isExpired } from 'react-jwt'

import axios from 'axios';

const RecoverPassword = () => {

    const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };

    const[datos, setDatos] = useState({
        password: '',
        confirmPassword: '',
        token: useParams()
    })

    const handleInputChange =(event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value 
        })
    }

    const handleChangePassword = (e) => {
        e.preventDefault();
        console.log(decodeToken(datos.token['token']).id)
        axios.put(`/users/update-user/${decodeToken(datos.token['token']).id}`,
            datos
        ).then(res => {
            alert(res.data.message);
            window.location.replace('/');
        }).catch(err => {
            console.log(err);
        });
        console.log(datos);
        alert('password updated successfully');
    }

    if (isExpired(datos.token['token'])) { 
        return  <Redirect to={from} />;
    } 
    
    
    return (
        <div>
            <div className="container padding-bottom-3x mb-2 mt-5">
                <Fragment>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div name="forgot">
                                <h2>Enter your new password</h2>
                                <p>Passwords must match</p>
                            </div>
                            <form className="card mt-4 " style={{ marginBottom: 40 }}>
                                <div className="card-body">
                                    <div className="form-group"> <label>Enter your new password</label> 
                                        <input className="form-control" type="password" name="password" value={ datos.password } onChange={handleInputChange}/>
                                    </div>
                                    <div className="form-group"> <label>Confirm your password</label> 
                                        <input className="form-control" type="password" name="confirmPassword" value={ datos.confirmPassword } onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success btn-block" onClick={ handleChangePassword }>
                                        <Link to="/login" className= "text-light" >Confirm password</Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fragment>
            </div>
        </div>       
    );
}
 export default RecoverPassword;