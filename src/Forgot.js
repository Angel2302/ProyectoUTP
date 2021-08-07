import React, {Fragment, useState} from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

const Forgot = () => {

    const[datos, setDatos] = useState({
        email: '',
    })

    const handleInputChange =(event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value 
        })
    }

    const recoverPassword = () => {
        axios.post('/users/get-change-password', 
            datos
        ).then(res => {
            alert(res.data.message)
            console.log(res.data.message);
        }).catch(err => {
            console.log(err);
        });
    }
    
    return (
        <div>
            <div className="container padding-bottom-3x mb-2 mt-5">
                <Fragment>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <div name="forgot">
                                <h2>Forgot your password?</h2>
                                <p>Change your password in three easy steps. This will help you to secure your password!</p>
                                <ol className="list-unstyled">
                                    <li><span className="text-primary text-medium">1. </span>Enter your email address below.</li>
                                    <li><span className="text-primary text-medium">2. </span>Our system will send you a temporary link</li>
                                    <li><span className="text-primary text-medium">3. </span>Use the link to reset your password</li>
                                </ol>
                            </div>
                            <form className="card mt-4 ">
                                <div className="card-body">
                                    <div className="form-group"> <label>Enter your email address</label> <input className="form-control" type="email" name='email' value={datos.email} onChange={handleInputChange}/> <small className="form-text text-muted">Enter the email address you used during the registration on TheGreenList.com. Then we'll email a link to this address.</small> </div>
                                </div>
                                <div className="card-footer"> <button className="btn btn-success" onClick={recoverPassword}><Link to="/login" className= "text-light" >Recover password</Link></button> <button className="btn btn-danger" type="submit">Back to Login</button> </div>
                            </form>
                        </div>
                    </div>
                </Fragment>
            </div>
        </div>       
    );
}
 export default Forgot;