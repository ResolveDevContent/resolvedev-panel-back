const mongoose = require("mongoose")

const FiltroSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    opciones: {
        type: [{
            nombre: {
                type: String,
                required: true
            }
        }]
    }
})

const Filtro = mongoose.model("Filtro", FiltroSchema)

module.exports = Filtro