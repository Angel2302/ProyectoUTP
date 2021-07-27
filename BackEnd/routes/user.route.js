const express = require('express');
const mongoose = require('mongoose');
let registroPrueba = require('../database/registros.prueba.json');

const router = express.Router();

router.post('/add-user', (req, res) => {
    let form = req.body;
    console.log(form);
    registroPrueba.users.push(form);
    res.status(200).send({
        message: "Add-user router"
    });
});

router.get('/list-users', (req, res) => {
    res.status(200).json(registroPrueba.users);
});

router.put('/update-user/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    console.log(id);
    registroPrueba.users.forEach(async (element, index) => {
        if(element.id == id){
            await registroPrueba.users.splice(index,1, form)
            res.status(200).send({
                message: "Update-user router"
            });
        }
    });
});

router.delete('/delete-user/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    registroPrueba.users.forEach((element, index) => {
        if(element.id == id){
            registroPrueba.users.splice(index,1)
            res.status(200).send({
                message: "Delete-user router"
            });
        }
    });
});

router.post('/login', (req, res) => {
    let form = req.body;
    console.log(form.Username);
    registroPrueba.users.forEach((element, index) => {
        if(element.Email == form.Username || element.Username == form.Username){
            if(element.Password == form.Password){
                res.status(200).json(element);
            } else {
                res.status(200).send({
                    message: "Incorrect Password"
                });
            }
        }
    });
    res.status(200).send({
        message: "Usuario o Email no existe"
    });
});

/*  * Import Schema
    * nameSchema.create({}, (err, Data) => {})
    * nameSchema.find((err, Data) => {})
    * nameSchema.findByIdAndUpdate(id, {$set: form}, (err, Data) => {})
    * nameSchema.findByIdAndDelete(id, (err, Data) => {})
*/

module.exports = router;