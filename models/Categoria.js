const mongoose = require("mongoose")

const CategoriaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    },
})

const Categoria = mongoose.model("Categorias", CategoriaSchema)

module.exports = Categoria