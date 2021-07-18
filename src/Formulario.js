import { even } from 'prelude-ls';
import React, {Fragment, useState} from 'react';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

 const Item = () => {
     const { name } = useParams();
    return (
        <div>
        <h3>{name}</h3>
        </div>
    );
};
  

const Formulario = () => {

    const[datos, setDatos] = useState({
        Name:'',
        Lastname:'',
        Username: '',
        Email: '',
        Password: ''
    })

    const handleInputChange =(event) => {
        setDatos({
            ...datos,
            [even.target.name] : event.target.value 
        })
    }

    const sendDatos = (event) => {
        event.preventDefault();
    }

    return (
        <div class="m-4">
        <Fragment>
            <h3>Registration Form</h3>
            <form class='container' onSubmit={sendDatos}>
                <div class='row'>
                    <input
                            placeholder="Email"
                            className="form-control"
                            type="email"
                            Email="Email"
                            omChange={handleInputChange}
                        ></input>
                </div>
                <div class='row mt-2'>
                    <div class='col-4'>
                        <input
                            placeholder="Name"
                            className="form-control"
                            type="text"
                            name="Name"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                    <div class='col-4'>
                        <input
                            placeholder="Lastname"
                            className="form-control"
                            type="text"
                            Lastname="Lastname"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                    <div class='col-4'>
                        <input
                            placeholder="Username"
                            className="form-control"
                            type="text"
                            Username="Username"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                <div class='row mt-3'>
                    <div class='col-6'>
                        <input
                            placeholder="password"
                            className="form-control"
                            type="text"
                            Passworde="passworde"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                    <div class='col-6'>
                        <input
                            placeholder="confirm password"
                            className="form-control"
                            type="text"
                            Username="Username"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                
                <div class='mt-3'>
                    <button class="btn btn-success btn-block mb-4">
                    <Link to="/login" class= "nav-link h5" >send</Link>
                    </button>
                </div>

            </form>
        </Fragment>
        </div>
    );
}
 export default Formulario;