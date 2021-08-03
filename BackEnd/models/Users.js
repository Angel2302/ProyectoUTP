const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let userSchema = new Schema(
    {
        nombre: {
            type: String,
        },
        apellidos: {
            type: String,
        },
        nombreUsuario: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        }
    },
    {
        collection: "users"
    }
);

module.exports = Mongoose.model("User", userSchema);