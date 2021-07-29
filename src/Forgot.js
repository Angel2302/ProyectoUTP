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
  

const Forgot = () => {

    const[datos, setDatos] = useState({
        
        Email: '',
        
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
            <h3>Password recovery will be sent to your email</h3>
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
                <div class='mt-3'>
                    <button class="btn btn-success regular-button">
                    <Link to="/login" class= "nav-link text-light" >Recover password</Link>
                    </button>
                </div>

            </form>
        </Fragment>
        </div>
    );
}
 export default Forgot;