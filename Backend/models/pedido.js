'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const pedidoSchema = schema( 
{
            
            numero_pedido : {
                type: Number,
                required: true
            },
            rut_cliente:[{
                type: schema.ObjectId,
                ref: "cliente"
            }],
            rut_usuario:[{
                type: schema.ObjectId,
                ref: "usuario"
            }]
}
    );
module.exports = mongoose.model('pedido', pedidoSchema);



