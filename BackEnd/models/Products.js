const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let productSchema = new Schema(
    {
        id: {
            type: Number,
        },
        nombre: {
            type: String,
        },
        categoria: {
            type: String,
        },
        funcion: {
            type: String,
        },
        color: {
            type: String,
        },
        peso: {
            type: Number,
        },
        precio: {
            type: Number,
        },
        imageUrl: {
            type: String,
        }
    },
    {
        collection: "products"
    }
);

module.exports = Mongoose.model("Product", productSchema);