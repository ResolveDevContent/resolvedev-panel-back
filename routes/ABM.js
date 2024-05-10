const express = require("express");
const { listar, agregar, modificar, borrar, listarUno } = require("../controllers/ABM");
const { authenticate } = require("../middlewares/Auth")

const Producto = require("../models/Producto");
const Categoria = require("../models/Categoria");
const Talle = require("../models/Talle");

const router = express.Router();

// PRODUCTOS ------------------------------------------------------------------

router.get("/productos/listar", authenticate, (req,res) => { listar(req,res,Producto) } )
router.get("/productos/listar/:id", authenticate, (req,res) => { listarUno(req,res,Producto) } )
router.post("/productos/agregar", authenticate, (req,res) => { agregar(req,res,Producto) } ) 
router.put("/productos/modificar/:id", authenticate, (req,res) => { modificar(req,res,Producto) } )
router.delete("/productos/borrar/:id", authenticate, (req,res) => { borrar(req,res,Producto) } )

// CATEGORIAS -----------------------------------------------------------------

router.get("/categorias/listar", authenticate, (req,res) => { listar(req,res,Categoria) } )
router.get("/categorias/listar/:id", authenticate, (req,res) => { listarUno(req,res,Categoria) } )
router.post("/categorias/agregar", authenticate, (req,res) => { agregar(req,res,Categoria) } )
router.put("/categorias/modificar/:id", authenticate, (req,res) => { modificar(req,res,Categoria) } )
router.delete("/categorias/borrar/:id", authenticate, (req,res) => { borrar(req,res,Categoria) } )

// TALLES -----------------------------------------------------------------

router.get("/talles/listar", authenticate, (req,res) => { listar(req,res,Talle) } )
router.get("/talles/listar/:id", authenticate, (req,res) => { listarUno(req,res,Talle) } )
router.post("/talles/agregar", authenticate, (req,res) => { agregar(req,res,Talle) } )
router.put("/talles/modificar/:id", authenticate, (req,res) => { modificar(req,res,Talle) } )
router.delete("/talles/borrar/:id", authenticate, (req,res) => { borrar(req,res,Talle) } )

module.exports = router;