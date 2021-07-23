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
        Category:'',
        Funcion: '',
        Weight: '',
        Color: '',
        Price: '',
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
        <div class=" center m-4">
        <Fragment>
            <h3>Edition Product</h3>
            <form class='container' onSubmit={sendDatos}>
                <div class='row'>
                    <div class='col-4'>
                        <input
                            placeholder="Id"
                            className="form-control"
                            type="number"
                            ID="id"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                    <div class='col-6'>
                        <input
                            placeholder="Name"
                            className="form-control"
                            type="text"
                            name="Name"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                    
                </div>
                <div class='row mt-2'>
                    
                    <div class='col-6'>
                        <input
                            placeholder="Category"
                            className="form-control"
                            type="text"
                            Category="Category"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                    <div class='col-6'>
                        <input
                            placeholder="Funcion"
                            className="form-control"
                            type="text"
                            Funcion="Funcion"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                <div class='row mt-3'>
                    <div class='col-4'>
                        <input
                            placeholder="-color"
                            className="form-control"
                            type="text"
                            Color="Color"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                    <div class='col-4'>
                        <input
                            placeholder="Weight"
                            className="form-control"
                            type="number"
                            Weight="weight"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                    <div class='col-4'>
                        <input
                            placeholder="Price"
                            className="form-control"
                            type="number"
                            Price="Price"
                            omChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                
                <div class='row center mt-3'>
                    <div class='col-3 center'>
                        <button class="btn btn-success btn-block mb-4">
                        <Link to="/login" class= "nav-link h5" >send</Link>
                        </button>
                    </div>
                    <div class='col-3 center'>
                        <button class="btn btn-success btn-block mb-4">
                        <Link to="/login" class= "nav-link h5" >send</Link>
                        </button>
                    </div><div class='col-3 center'>
                        <button class="btn btn-success btn-block mb-4">
                        <Link to="/login" class= "nav-link h5" >send</Link>
                        </button>
                    </div>
                    
                </div>

            </form>
        </Fragment>
        </div>
    );
}
 export default Formulario;