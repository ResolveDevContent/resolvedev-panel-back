const mongoose = require("mongoose")

const ProductoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: String,
        required: true,
    },
    stock: {
        type: String,
        required: true
    },
    carrito: {
        type: Boolean,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    caracteristicas: {
        type: Array,
        required: true,
    },
    categorias: {
        type: mongoose.Schema.ObjectId,
        ref: "categorias",
        required: true,
    },
    descuento: {
        type: Number
    },
    imagenes: {
        type: Array
    },
    videos: {
        type: Array
    },
    piezas: {
        type: Number,
        required: true,
    },
    unidad: {
        type: String,
    },
    filtros: {
        type: [{
            filtro: {
                type: String,
            },
            opciones: []
        }]
    }
})

const Producto = mongoose.model("Producto", ProductoSchema)

module.exports = Producto