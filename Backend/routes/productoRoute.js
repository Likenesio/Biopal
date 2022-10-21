'use strict'

var express = require('express');
var productoController = require('../controllers/productoController');
var api = express.Router();

api.post('/productos', productoController.insert);
api.delete('/productos/:codigo_barra', productoController.eliminar);
api.get('/productos', productoController.listar);
api.get('/productos/:codigo_barra', productoController.buscarProducto);
api.put('/productos/:codigo_barra', productoController.actualizar);

module.exports = api;