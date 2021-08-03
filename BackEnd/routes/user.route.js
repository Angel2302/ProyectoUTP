const express = require('express');
const mongoose = require('mongoose');
let registroPrueba = require('../database/registros.prueba.json');
const userSchema = require('../models/Users');

const router = express.Router();

router.post('/add-user', (req, res) => {
    let form = req.body;
    console.log(form);
    if(form.nombre != '' && form.apellidos != '' && form.email != '' && form.password != '' && form.confirmPassword != ''){
        if(form.password === form.confirmPassword) {
            userSchema.findOne({email: form.email}, (err, data) => {
                if(!err) {
                    if(!data){  
                        userSchema.create(form, (err,data) => {
                            if(!err) {
                                console.log(data);
                                res.status(200).json(data);
                            } else {
                                console.log(err);
                                res.send({
                                    message: `[ERROR]: ${err}`
                                }).status(500);
                            }
                        });
                    } else {
                        console.log(data);
                        res.send({
                            message: 'Ya existe un usuario con este email'
                        }).status(409);
                    }
                } else {
                    console.log(err);
                    res.send({
                        message: `[ERROR]: ${err}`
                    }).status(500);
                }
            });
        } else {
            res.send({
                message: 'Las contraseñas no coinciden'
            }).status(400);
        }
    } else {
        res.send({
            message: 'Debe llenar los campos Obligatorios'
        }).status(400);
    }
});


router.get('/list-users', (req, res) => {
    userSchema.find((err, data) => {
        if(!err) {
            console.log(data);
            res.status(200).json(data);
        } else {
            console.log(err);
            res.send({
                message: `[ERROR]: ${err}`
            }).status(500);
        }
    });
});

router.put('/update-user/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    if(form.email != '' && form.password != '' && form.password2 != ''){
        userSchema.findByIdAndUpdate(id, {$set: form},  (err, data) => {
            if(!err) {
                if(data){
                    console.log(data);
                    res.status(200).json(data);
                } else {
                    console.log(`No se encontró el usuario`);
                    res.send({
                        message: `No se encontró el usuario}`
                    }).status(409);
                }
            } else {
                console.log(err);
                res.send({
                    message: `[ERROR]: ${err}`
                }).status(500);
            }
        });
    } else {
        res.send({
            message: 'Debe llenar los campos Obligatorios'
        }).status(400);
    }
});

router.delete('/delete-user/:id', (req, res) => {
    let id = req.params.id;
    if(id != '') {
        userSchema.findByIdAndDelete(id, (err,data) => {
            if(!err){
                if(data){
                    console.log(data);
                    res.status(200).send({
                        message: "Usert Deleted"
                    });
                } else {
                    console.log(`No existe el usuario`);
                    res.send({
                        message: `No existe el usuario`
                    }).status(409);
                }
            } else {
                console.log(err);
                res.send({
                    message: `[ERROR]: ${err}`
                }).status(500);
            }
        });
    } else {
        res.send({
            message: 'Debe proporcionar un id'
        }).status(400);
    }
});


router.post('/login', (req, res) => {
    let form = req.body;
    let filter = {};
    if(form.username != '' && form.password != ''){
        if(form.username.indexOf('@') != -1){
            filter = {
                email: form.username,
                password: form.password
            } 
        } else {
            filter = {
                nombreUsuario: form.username,
                password: form.password
            } 
        }
        userSchema.findOne(filter, (err, data) => {
            if(!err){
                if(data){
                    console.log(data);
                    res.status(200).json(data);
                } else {
                    console.log('Datos Incorrectos');
                    res.send({
                        message: 'Datos incorrectos'
                    }).status(400);
                }
            } else {
                console.log(err);
                res.send({
                    message: `[ERROR]: ${err}`
                }).status(500);
            }
        });
    } else {
        res.send({
            message: 'Debe llenar los campos Obligatorios'
        }).status(400);
    }
});

module.exports = router;