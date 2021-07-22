const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.post('/add-product', (req, res) => {
    let form = req.body;
    console.log(form);
    res.status(200).send({
        message: "Add-product router"
    });
});

router.get('/list-products', (req, res) => {
    res.status(200).send({
        message: "List-products router"
    });
});

router.put('/update-product/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.status(200).send({
        message: "Update-product router"
    });
});

router.delete('/delete-product/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    res.status(200).send({
        message: "Delete-product router"
    });
});

/*  * Import Schema
    * nameSchema.create({}, (err, Data) => {})
    * nameSchema.find((err, Data) => {})
    * nameSchema.findByIdAndUpdate(id, {$set: form}, (err, Data) => {})
    * nameSchema.findByIdAndDelete(id, (err, Data) => {})
*/

module.exports = router;