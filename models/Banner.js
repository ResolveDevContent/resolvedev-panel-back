const mongoose = require("mongoose")

const BannerSchema = new mongoose.Schema({
    imagenes: {
        type: Array,
    },
    videos: {
        type: Array,
    },
    titulo: {
        type: String,
    },
    subtitulo: {
        type: String,
    },
    descripcion: {
        type: String,
    },
    textoBoton: {
        type: String
    }
})

const Banner = mongoose.model("Banners", BannerSchema)

module.exports = Banner