import React, {Fragment, useState} from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

const Formulario = () => {

    const[datos, setDatos] = useState({
        id: '',
        nombre:'',
        categoria:'',
        funcion: '',
        peso: '',
        color: '',
        precio: '',
        imageUrl: '',
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
            if(res.data.message){
                alert(res.data.message);
            } else {
                setDatos({
                    id: res.data.id,
                    nombre:res.data.nombre,
                    categoria:res.data.categoria,
                    funcion: res.datafuncion,
                    peso: res.data.peso,
                    color: res.data.color,
                    precio: res.data.precio,
                    imageUrl: res.data.imageUrl,
                });
                alert('Seach OK');
                console.log(datos);
            }
            
        }).catch(error => {
            console.log(error)
        });
    }
    function Add() {
        axios.post('/products/add-product',
            datos
        ).then(res => {
            if(res.data.message){
                alert(res.data.message);
            } else {
                setDatos({
                    id: '',
                    nombre:'',
                    categoria:'',
                    funcion: '',
                    peso: '',
                    color: '',
                    precio: '',
                    imageUrl: '',
                });
                alert('Add successful');
            }
        }).catch(error => {
            console.log(error);
        });
    }

    function Edit() {
        axios.put(`/products/update-product/${datos.id}`,
            datos
        ).then(res => {
            
            if(res.data.message){
                alert(res.data.message)
            } else {
                setDatos({
                    id: '',
                    nombre:'',
                    categoria:'',
                    funcion: '',
                    peso: '',
                    color: '',
                    precio: '',
                    imageUrl: '',
                });
                alert('edit successful');
            }
        }).catch(error => {
            console.log(error);
        });
        
    }
    function Delete() {
        axios.delete(`/products/delete-product/${datos.id}`).then(res => {
            if(res.data.message){
                alert(res.data.message);
            } else {
                setDatos({
                    id: '',
                    nombre:'',
                    categoria:'',
                    funcion: '',
                    peso: '',
                    color: '',
                    precio: '',
                    imageUrl: '',
                });
                alert('Delete successful');
            }
        }).catch(error => {
            console.log(error)
        });
    }

    function Logout() {
        alert('Closed session');
        localStorage.removeItem('jwtToken');
    }
    function Logout() {
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
                            name="nombre"
                            value={ datos.nombre }
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    
                </div>
                <div className='row mt-2'>
                    <div className='col-6'>
                        <select value={ datos.categoria } className="form-control"  onChange={handleInputChange} placeholder="Category" name="categoria">
                            <option value="">Select Category</option> 
                            <option value="tools">Tools</option> 
                            <option value="seeds">Seeds</option> 
                            <option value="fertilizers">Fertilizers</option>
                            <option value="plants">Plants</option> 
                        </select>
                    </div>
                    <div className='col-6'>
                        <input
                            placeholder="Funcion"
                            className="form-control"
                            type="text"
                            name="funcion"
                            value={ datos.funcion }
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
                            name="color"
                            value={ datos.color }
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className='col-4'>
                        <input
                            placeholder="Weight"
                            className="form-control"
                            type="number"
                            name="peso"
                            value={ datos.peso }
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className='col-4'>
                        <input
                            placeholder="Price"
                            className="form-control"
                            type="number"
                            name="precio"
                            value={ datos.precio }
                            onChange={handleInputChange}
                        ></input>
                    </div>

                    <div className='row mt-3'>
                        <input
                            placeholder="imageUrl"
                            className="form-control"
                            type="text"
                            name="imageUrl"
                            value= { datos.imageUrl }
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
                    <div className='col-2 '>
                        <button className="btn btn-success  mb-4" onClick={Add}>
                        <Link to="/Admin" className= "nav-link text-light" >Add</Link>
                        </button>
                    </div>
                    <div className='col-2 '>
                        <button className="btn btn-success  mb-4" onClick={Edit}>
                        <Link to="/Admin" className= "nav-link text-light" >Edit</Link>
                        </button>
                    </div>
                    <div className='col-3 '>
                        <button className="btn btn-success  mb-4" onClick={Delete}>
                        <Link to="/Admin" className= "nav-link text-light" >Delete</Link>
                        </button>
                    </div>
                    <div className='col-2 '>
                        <button className="btn btn-danger  mb-4" onClick={Logout}>
                        <Link to="/Admin" className= "nav-link text-light" >Logout</Link>
                        </button>
                    </div>
                </div>
            </form>
        </Fragment>
        </div>
    );
}
 export default Formulario;