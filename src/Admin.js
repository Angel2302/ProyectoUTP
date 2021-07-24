
// import React from "react";
// import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

// const Item = () => {
//   const { name } = useParams();

//   return (
//     <div>
//       <h3>{name}</h3>
//     </div>
//   );
// };

// const Admin = () => {
//   const { url, path } = useRouteMatch();

//   return(
//     <div>
//       <h3>Hello admin</h3>
      
//     </div>
//   );
// };

// export default Admin;
import { message } from 'antd';
import { even } from 'prelude-ls';
import React, {Fragment, useState} from 'react';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";


function Search() {
    alert('Seach OK');
    
}
function Add() {
    alert('Add successful');
    
}
function Edit() {
    alert('edit successful');
    
}
function Delete() {
    alert('Delete successful');
    
}

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
                            placeholder="Color"
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
                    <div class='col-3 '>
                        <button class="btn btn-secondary  mb-4" onClick={Search}>
                        <Link to="/Admin" class= "nav-link h5" >Search</Link>
                        </button>
                    </div>
                    <div class='col-3 '>
                        <button class="btn btn-success  mb-4" onClick={Add}>
                        <Link to="/Admin" class= "nav-link h5" >Add</Link>
                        </button>
                    </div>
                    <div class='col-3 '>
                        <button class="btn btn-warning  mb-4" onClick={Edit}>
                        <Link to="/Admin" class= "nav-link h5" >Edit</Link>
                        </button>
                    </div><div class='col-3 '>
                        <button class="btn btn-danger  mb-4" onClick={Delete}>
                        <Link to="/Admin" class= "nav-link h5" >Delete</Link>
                        </button>
                    </div>               
                    
                </div>
            </form>
        </Fragment>
        </div>
    );
}
 export default Formulario;