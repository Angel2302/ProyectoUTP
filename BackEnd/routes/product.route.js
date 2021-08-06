const express = require('express');
const productSchema = require('../models/Products');

const router = express.Router();

//Agregar un producto
router.post('/add-product', (req, res) => {
    let form = req.body;
    if(form.id != '' && form.nombre != '' && form.categoria != '' && form.funcion != ''){
        productSchema.findOne({id: form.id}, (err, data) => {
            if(!err){
                if(!data){
                    productSchema.create(form, (err, data) => {
                        if(!err){
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
                        message: 'El producto ya existe'
                    }).status(400);
                }
            } else {
                console.log(err);
                res.send({
                    message: `[ERROR]: ${err}`
                }).status(500);
            }
        })
    } else {
        res.send({
            message: 'Debe llenar los campos Obligatorios'
        }).status(400);
    }
});

router.get('/list-products', (req, res) => {
    productSchema.find((err, data) => {
        if(!err){
            console.log(data);
            res.status(200).json(data);
        } else {
            console.log(err);
            res.send({
                message: `[ERROR]: ${err}`
            }).status(500);
        }
    })
});

router.put('/update-product/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    if(id != '' && form.nombre != '' && form.categoria != '' && form.funcion != ''){
        productSchema.findOneAndUpdate({id: id}, {$set: form}, (err, data) => {
            if(!err){
                if(data){
                    console.log(data);
                    res.status(200).json(form);
                } else {
                    console.log(`No se encontró el producto con id: ${id}`);
                    res.send({
                        message: `No se encontró el producto con id: ${id}`
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

router.delete('/delete-product/:id', (req, res) => {
    let id = req.params.id;
    if(id != ''){
        productSchema.findOneAndDelete({id: id} , (err, data) => {
            if(!err){
                if(data){
                    console.log(data);
                    res.status(200).send({
                        message: "Product Deleted"
                    });
                } else {
                    console.log(`No existe el producto con id: ${id}`);
                    res.send({
                        message: `No existe el producto con id: ${id}`
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
            message: 'Debe proporcionar un id'
        }).status(400);
    }
});

router.post('/search-product', (req, res) => {
    let form = req.body;
    if(form.id != ''){
        productSchema.findOne({id: form.id}, (err, data) => {
            if(!err){
                if(data){
                    console.log(data);
                    res.status(200).json(data);
                } else {
                    console.log(`No se encontró el producto con id: ${form.id}`);
                    res.send({
                        message: `No se encontró el producto con id: ${form.id}`
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
            message: 'Debe proporcionar un id'
        }).status(400);
    }
});

router.post('/filter-products', (req, res) => {
    let form = req.body;
    productSchema.find({categoria: form.categoria}, (err, data) => {
        if(!err){
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

module.exports = router;