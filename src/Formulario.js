import React, {Fragment, useState} from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

const Formulario = () => {

    const[datos, setDatos] = useState({
        nombre:'',
        apellidos:'',
        nombreUsuario: '',
        email: '',
        password: '',
        confirmPassword: ''
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
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        });
        alert('Add-User');
    }

    return (
    <div className= "container justify-content-center" >
        <div className="m-4">
        <Fragment>
            <h3>Registration Form</h3>
            <form className='container' onSubmit={sendDatos}>
                <div className='row'>
                    <input
                            placeholder="Email"
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={handleInputChange}
                        ></input>
                </div>
                <div className='row mt-2 '>
                    
                        <input
                            placeholder="Name"
                            className="form-control"
                            type="text"
                            name="nombre"
                            onChange={handleInputChange}
                        ></input>
                </div>    
                <div className='row mt-2'>
                        <input
                            placeholder="Lastname"
                            className="form-control"
                            type="text"
                            name="apellidos"
                            onChange={handleInputChange}
                        ></input>
                </div>
                <div className='row mt-2'>
                        <input
                            placeholder="Username"
                            className="form-control"
                            type="text"
                            name="nombreUsuario"
                            onChange={handleInputChange}
                        ></input>
                </div>
               
                <div className='row mt-3'>
                    <div className='col-6'>
                        <input
                            placeholder="password"
                            className="form-control"
                            type="password"
                            name="password"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className='col-6'>
                        <input
                            placeholder="confirm password"
                            className="form-control"
                            type="password"
                            name="confirmPassword"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                
                <div className='col text-center mt-3'>
                    <button onClick={ register } className="btn-success regular-button">
                        <Link to="/login" className= "nav-link text-light h5" >Sign up</Link>
                    </button>
                </div>

            </form>
        </Fragment>
        </div>
    </div>
    );
}
 export default Formulario;