const mongoose = require("mongoose")

const UsuarioSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const Usuario = mongoose.model("Usuario", UsuarioSchema)

module.exports = Usuario