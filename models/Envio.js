const mongoose = require("mongoose")

const EnvioSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    informacion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true,
    },
})

const Envio = mongoose.model("Envios", EnvioSchema)

module.exports = Envio