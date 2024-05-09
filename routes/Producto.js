const express = require("express");
const { listar, agregar, modificar, borrar } = require("../controllers/ABM");
const { authenticate } = require("../middlewares/Auth")
const Producto = require("../models/Producto");

const router = express.Router();

router.get("/productos/listar", authenticate, listar(req,res,Producto))
router.post("/productos/agregar", authenticate, agregar(req,res,Producto))
router.put("/productos/modificar", authenticate, modificar(req,res,Producto))
router.delete("/productos/borrar", authenticate, borrar(req,res,Producto))

module.exports = router;