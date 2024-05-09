const mongoose = require("mongoose");
require("dotenv").config()

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log("Conectado a mongoDB")
    } catch (err) {
        console.log("Error conectando a mongoDB", err)
    }
}

module.exports = db;