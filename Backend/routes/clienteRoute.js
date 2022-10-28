'use strict'

var express = require('express');
var clienteController = require('../controllers/clienteController');
var api = express.Router();

api.post('/cliente', clienteController.insert);
api.get('/cliente', clienteController.listar);
api.get('/cliente/:id', clienteController.buscar);
api.put('/cliente/:id', clienteController.actualizar);
api.delete('/cliente/:id', clienteController.eliminar);

module.exports = api;