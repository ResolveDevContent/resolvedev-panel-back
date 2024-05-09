const mongoose = require("mongoose")

const TalleSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    }
})

const Talle = mongoose.model("Talle", TalleSchema)

module.exports = Talle