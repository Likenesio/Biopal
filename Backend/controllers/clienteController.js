var Producto = require('../models/cliente');

function insert(req, res){
    try{
       let cliente = new cliente();
       cliente.rut = req.body.rut;
       cliente.nombre_cliente = req.body.nombre_cliente;
       cliente.direccion = req.body.direccion;
       cliente.comuna = req.body.comuna;
       cliente.contacto =req.body.contacto;
       producto.save((err, addcliente)=>{
           if(err){
               return res.status(400).send({mensaje:'error al intentar guardar en base de datos'});
           }
           res.status(200).send({cliente: addcliente});
       });

    }
    catch(err){
         res.status(500).send({mensaje:'error:' + err});
    }
}
function eliminar(req,res){
    let idcliente = req.params.id;
    Producto.findByIdAndDelete(idcliente, (err)=>{
     if(err){
         return res.status(500).send({mensaje:'error al eliminar producto de la base de datos'});
     }
     res.status(200).send({mensaje:'Producto eliminado exitosamente'});
 });
  
}

function actualizar(req, res)
{
    let idcliente = req.params.id;
    cliente.rut = req.body.rut;
    cliente.nombre_cliente = req.body.nombre_cliente;
    cliente.direccion = req.body.direccion;
    cliente.comuna = req.body.comuna;
    cliente.contacto =req.body.contacto;
    Producto.findByIdAndUpdate(idcliente,{ rut:rut, nombre_cliente:nombre_cliente, direccion:direccion, comuna:comuna, contacto:contacte}, (err, cliente)=>{
        if(err){
            return res.status(500).send({mensaje:'error al actualizar el producto de la base de datos'});
        }
        if(!cliente){
            res.status(404).send({mensaje:'producto no encontrado'});
        }
        res.status(200).send({mensaje:'Producto actualizado exitosamente'});

    })
}

function listar(req, res){   
    Producto.find({},(err, cliente)=>{
        if(err){
            return res.status(500).send({mensaje:'error al listar los productos de la base de datos'});
        }
        res.status(200).send({cliente});

    })
}
function buscar(req, res){
    let idcliente = req.params._id;
    Producto.findById(idcliente, (err, cliente) =>{
        if(err){
            return res.status(500).send({mensaje:'error al buscar el cliente en la base de datos'});
        }
        if(!producto){
            res.status(404).send({mensaje:'cliente no encontrado'});
        }
        res.status(200).send({cliente});

    })
}
module.exports = {
    insert, eliminar, actualizar, listar, buscar
};

