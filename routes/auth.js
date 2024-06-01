const express = require("express");
const { register, login, update } = require("../controllers/Auth");
const { authenticate, authenticateTienda } = require("../middlewares/Auth")

const Usuario = require("../models/Usuario")
const UsuarioTienda = require("../models/UsuarioTienda")

const router = express.Router();

router.post("/panel/register", (req, res) => register(req, res, Usuario))
router.post("/panel/login", (req, res) => login(req, res, Usuario))

router.post("/tienda/register", (req, res) => register(req, res, UsuarioTienda))
router.post("/tienda/login", (req, res) => login(req, res, UsuarioTienda))

router.get("/perfil", authenticate, (req, res) => {
    res.json({ message: req.user})
})

router.get("/tienda/perfil", authenticateTienda, (req, res) => {
    res.json({ message: req.user})
})

router.put("/tienda/perfil/modificar/:id", authenticateTienda, (req, res) => update(req, res, UsuarioTienda))

router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out" });
});

module.exports = router;