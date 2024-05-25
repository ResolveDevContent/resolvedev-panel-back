const mongoose = require("mongoose")

const TiendaSchema = new mongoose.Schema({
    light: {
        type: String,
    },
    dark: {
        type: String,
    },
    muted: {
        type: String,
    },
    mutedLight: {
        type: String,
    },
    mutedDark: {
        type: String,
    },
    font: {
        type: String,
    },
    promociones: {
        type: {
            disponible: {
                type: Boolean,
                required: true
            },
            titulo: {
                type: String,
            } 
        }
    }
})

const Tienda = mongoose.model("Tienda", TiendaSchema)

module.exports = Tienda