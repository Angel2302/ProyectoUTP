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
        Email: ''
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
                    <div class='col-3'>
                        <input
                            placeholder="Name"
                            className="form-control"
                            type="text"
                            name="Name"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                    <div class='col-3'>
                        <input
                            placeholder="Lastname"
                            className="form-control"
                            type="text"
                            Lastname="Lastname"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                    <div class='col-3'>
                        <input
                            placeholder="Username"
                            className="form-control"
                            type="text"
                            Username="Username"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                
                <div class='col-3'>
                    <button>send</button>
                </div>

            </form>
        </Fragment>
        </div>
    );
}
 export default Formulario;