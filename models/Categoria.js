const mongoose = require("mongoose")

const CategoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    subcategorias: {
        type: Array
    }
})

const Categoria = mongoose.model("Categoria", CategoriaSchema)

module.exports = Categoria