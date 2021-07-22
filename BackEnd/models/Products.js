const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let productSchema = new Schema(
    {
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
        }
    },
    {
        collection: "products"
    }
);

module.exports = Mongoose.model("Product", productSchema);