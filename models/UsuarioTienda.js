const mongoose = require("mongoose")

const UsuarioTiendaSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    celular: {
        type: Number,
    },
    domicilio: {
        type: {
            direccion: {
                type: String,
            },
            localidad: {
                type: String,
            },
            codigo_postal: {
                type: String,
            },
            provincia: {
                type: String,
            },
            pais: {
                type: String,
            }
        }
    },
    avatar: {
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

const UsuarioTienda = mongoose.model("UsuarioTienda", UsuarioTiendaSchema)

module.exports = UsuarioTienda