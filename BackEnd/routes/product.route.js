const express = require('express');
const mongoose = require('mongoose');
let registroPrueba = require('../database/registros.prueba.json');

const router = express.Router();

router.post('/add-product', (req, res) => {
    let form = req.body;
    console.log(form);
    registroPrueba.products.push(form);
    res.status(200).send({
        message: "Add-product router"
    });
});

router.get('/list-products', (req, res) => {
    res.status(200).json(registroPrueba.products);
});

router.put('/update-product/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    console.log(id);
    registroPrueba.products.forEach((element, index) => {
        if(element.id == id){
            registroPrueba.products.splice(index,1, form)
            res.status(200).send({
                message: "Update-products router"
            });
        }
    });
});

router.delete('/delete-product/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    registroPrueba.products.forEach((element, index) => {
        if(element.id == id){
            registroPrueba.products.splice(index,1)
            res.status(200).send({
                message: "Delete-products router"
            });
        }
    });
});

/*  * Import Schema
    * nameSchema.create({}, (err, Data) => {})
    * nameSchema.find((err, Data) => {})
    * nameSchema.findByIdAndUpdate(id, {$set: form}, (err, Data) => {})
    * nameSchema.findByIdAndDelete(id, (err, Data) => {})
*/

module.exports = router;