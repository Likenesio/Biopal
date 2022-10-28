'use strict'

var express = require('express');
var productoController = require('../controllers/productoController');
var api = express.Router();

api.post('/productos', productoController.insert);
api.get('/productos', productoController.listar);
api.get('/productos/:id', productoController.buscarProducto);
api.put('/productos/:id', productoController.actualizar);
api.delete('/productos/:id', productoController.eliminar);

module.exports = api;