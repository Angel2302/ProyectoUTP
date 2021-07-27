import React, {Fragment, useState} from 'react';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import axios from 'axios';

const Formulario = () => {

    const[datos, setDatos] = useState({
        Name:'',
        Lastname:'',
        Username: '',
        Email: '',
        Password: '',
        ConfirmPassword: ''
    })

    const handleInputChange =(event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value 
        })
    }

    const sendDatos = (event) => {
        event.preventDefault();
    }

    function register() {
        axios.post('/users/add-user', 
            datos
        ).then(res => {
            console.log(res.data.message);
        }).catch(error => {
            console.log(error);
        });
        alert('Add-User');
    }

    return (
        <div className="m-4">
        <Fragment>
            <h3>Registration Form</h3>
            <form className='container' onSubmit={sendDatos}>
                <div className='row'>
                    <input
                            placeholder="Email"
                            className="form-control"
                            type="email"
                            name="Email"
                            onChange={handleInputChange}
                        ></input>
                </div>
                <div className='row mt-2'>
                    <div className='col-4'>
                        <input
                            placeholder="Name"
                            className="form-control"
                            type="text"
                            name="Name"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className='col-4'>
                        <input
                            placeholder="Lastname"
                            className="form-control"
                            type="text"
                            name="Lastname"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className='col-4'>
                        <input
                            placeholder="Username"
                            className="form-control"
                            type="text"
                            name="Username"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-6'>
                        <input
                            placeholder="password"
                            className="form-control"
                            type="password"
                            name="Password"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className='col-6'>
                        <input
                            placeholder="confirm password"
                            className="form-control"
                            type="password"
                            name="ConfirmPassword"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                
                <div className='mt-3'>
                    <button onClick={ register } className="btn btn-success btn-block mb-4">
                        <Link to="/login" className= "nav-link h5" >send</Link>
                    </button>
                </div>

            </form>
        </Fragment>
        </div>
    );
}
 export default Formulario;