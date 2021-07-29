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

import axios from 'axios';

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
        id: '',
        Nombre:'',
        Category:'',
        Funcion: '',
        Weight: '',
        Color: '',
        Price: '',
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

    function Search() {
        axios.post('/products/search-product',
            datos
        ).then(res => {
            setDatos(res.data);
            console.log(res.data);
        }).catch(error => {
            console.log(error)
        });
        alert('Seach OK');
    }
    function Add() {
        var vacio = 0;
        if(datos.id === ''){
            alert('id empty field');
            vacio = 1;
        }
            else if(datos.Nombre === ''){
                alert('empty field');
                vacio = 1;
            }
            else if(datos.Category === ''){
                alert('Category empty field');
                vacio = 1;
            }
            else if(datos.Funcion === ''){
                alert('Function empty field');
                vacio = 1;
            }
        else if (!vacio)
        {
           
        axios.post('/products/add-product',
            datos
        ).then(res => {
            setDatos({
                id: '',
                Nombre:'',
                Category:'',
                Funcion: '',
                Weight: '',
                Color: '',
                Price: '',
            });
            console.log(res.data.message);
        }).catch(error => {
            console.log(error);
        });
        alert('Add successful');
        }
        
        
    }
    function Edit() {
        axios.put(`/products/update-product/${datos.id}`,
            datos
        ).then(res => {
            setDatos(res.data);
            console.log(res.data);
        }).catch(error => {
            console.log(error);
        });
        alert('edit successful');
    }
    function Delete() {
        axios.delete(`/products/delete-product/${datos.id}`).then(res => {
            setDatos({
                id: '',
                Nombre:'',
                Category:'',
                Funcion: '',
                Weight: '',
                Color: '',
                Price: '',
            });
        }).catch(error => {
            console.log(error)
        });
        alert('Delete successful');
    }

    return (
        <div className=" center m-4">
        <Fragment>
            <h3>Edition Product</h3>
            <form className='container' onSubmit={sendDatos}>
                <div className='row'>
                    <div className='col-6'>
                        <input
                            placeholder="Id"
                            className="form-control"
                            type="number"
                            name="id"
                            value={ datos.id }
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className='col-6'>
                        <input
                            placeholder="Name"
                            className="form-control"
                            type="text"
                            name="Nombre"
                            value={ datos.Nombre }
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    
                </div>
                <div className='row mt-2'>
                    <div className='col-6'>
                        <input
                            placeholder="Category"
                            className="form-control"
                            type="text"
                            name="Category"
                            value={ datos.Category }
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className='col-6'>
                        <input
                            placeholder="Funcion"
                            className="form-control"
                            type="text"
                            name="Funcion"
                            value={ datos.Funcion }
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-4'>
                        <input
                            placeholder="Color"
                            className="form-control"
                            type="text"
                            name="Color"
                            value={ datos.Color }
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className='col-4'>
                        <input
                            placeholder="Weight"
                            className="form-control"
                            type="number"
                            name="Weight"
                            value={ datos.Weight }
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className='col-4'>
                        <input
                            placeholder="Price"
                            className="form-control"
                            type="number"
                            name="Price"
                            value={ datos.Price }
                            onChange={handleInputChange}
                        ></input>
                    </div>
                </div>
                
                <div className='row center mt-3'>
                    <div className='col-3 '>
                        <button className="btn btn-success  mb-4" onClick={Search}>
                        <Link to="/Admin" className= "nav-link text-light" >Search</Link>
                        </button>
                    </div>
                    <div className='col-3 '>
                        <button className="btn btn-success  mb-4" onClick={Add}>
                        <Link to="/Admin" className= "nav-link text-light" >Add</Link>
                        </button>
                    </div>
                    <div className='col-3 '>
                        <button className="btn btn-success  mb-4" onClick={Edit}>
                        <Link to="/Admin" className= "nav-link text-light" >Edit</Link>
                        </button>
                    </div>
                    <div className='col-3 '>
                        <button className="btn btn-success  mb-4" onClick={Delete}>
                        <Link to="/Admin" className= "nav-link text-light" >Delete</Link>
                        </button>
                    </div>               
                    
                </div>
            </form>
        </Fragment>
        </div>
    );
}
 export default Formulario;