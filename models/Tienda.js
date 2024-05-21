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
        type: Boolean
    }
})

const Tienda = mongoose.model("Tienda", TiendaSchema)

module.exports = Tienda