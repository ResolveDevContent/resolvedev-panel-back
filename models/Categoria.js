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

const Categoria = mongoose.model("Categorias", CategoriaSchema)

module.exports = Categoria