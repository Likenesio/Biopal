'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const pedprodSchema = schema( 
{
            codigo_barra_producto:[{
                type: schema.ObjectId,
                ref: "producto"
            }],
            numero_pedido:[{
                type: schema.ObjectId,
                ref: "pedido"
            }],
            cantidad_producto:{
                type: Number,
                require: true
                
            }
 
}
    );
module.exports = mongoose.model('pedprod', pedprodSchema);


