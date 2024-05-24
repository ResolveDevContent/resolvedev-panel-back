const mongoose = require("mongoose")

const FiltroSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    opciones: {
        type: [{
            id: {
                type: String,
                default: Date.now()
            },
            name: {
                type: String,
                require: true
            }
        }]
    }
})

const Filtro = mongoose.model("Filtro", FiltroSchema)

module.exports = Filtro