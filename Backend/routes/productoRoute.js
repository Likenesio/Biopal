'use strict'

var express = require('express');
var productoController = require('../controllers/productoController');
var api = express.Router();

api.post('/productos', productoController.insert);
api.delete('/productos/:idproducto', productoController.eliminar);
api.get('/productos', productoController.listar);
api.get('/productos/idproducto', productoController.buscarProducto);
api.put('/productos/idproducto', productoController.actualizar);

module.exports = api;