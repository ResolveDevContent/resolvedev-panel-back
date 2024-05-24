const express = require("express");
const { listar, agregar, modificar, borrar, listarUno } = require("../controllers/ABM");
const { authenticate } = require("../middlewares/Auth")

const Producto = require("../models/Producto");
const Categoria = require("../models/Categoria");
const Filtro = require("../models/Filtro");
const Tienda = require("../models/Tienda");

const router = express.Router();

// PRODUCTOS ------------------------------------------------------------------

router.get("/productos/listar", (req,res) => { listar(req,res,Producto) } )
router.get("/productos/listar/:id", (req,res) => { listarUno(req,res,Producto) } )
router.post("/productos/agregar", authenticate, (req,res) => { agregar(req,res,Producto) } ) 
router.put("/productos/modificar/:id", authenticate, (req,res) => { modificar(req,res,Producto) } )
router.delete("/productos/borrar/:id", authenticate, (req,res) => { borrar(req,res,Producto) } )

// CATEGORIAS -----------------------------------------------------------------

router.get("/categorias/listar", (req,res) => { listar(req,res,Categoria) } )
router.get("/categorias/listar/:id", (req,res) => { listarUno(req,res,Categoria) } )
router.post("/categorias/agregar", authenticate, (req,res) => { agregar(req,res,Categoria) } )
router.put("/categorias/modificar/:id", authenticate, (req,res) => { modificar(req,res,Categoria) } )
router.delete("/categorias/borrar/:id", authenticate, (req,res) => { borrar(req,res,Categoria) } )

// FILTROS -----------------------------------------------------------------

router.get("/filtros/listar", (req,res) => { listar(req,res,Filtro) } )
router.get("/filtros/listar/:id", (req,res) => { listarUno(req,res,Filtro) } )
router.post("/filtros/agregar", authenticate, (req,res) => { agregar(req,res,Filtro) } )
router.put("/filtros/modificar/:id", authenticate, (req,res) => { modificar(req,res,Filtro) } )
router.delete("/filtros/borrar/:id", authenticate, (req,res) => { borrar(req,res,Filtro) } )

// TIENDA -----------------------------------------------------------------

router.get("/tienda/listar", (req,res) => { listar(req,res,Tienda) } )
router.post("/tienda/agregar", authenticate, (req,res) => { agregar(req,res,Tienda) } )
router.put("/tienda/modificar/:id", authenticate, (req,res) => { modificar(req,res,Tienda) } )

module.exports = router;