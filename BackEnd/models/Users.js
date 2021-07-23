const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let userSchema = new Schema(
    {
        nombre: {
            type: String,
        },
        telefono: {
            type: Number,
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