const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const db = require("./db")
const cookieParser = require("cookie-parser");

const app = express();

db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}

app.use(cors(corsOptions));

app.use("/auth", authRoutes)

app.listen(3000, () => {
    console.log("Iniciar servidor desde 3000");
})