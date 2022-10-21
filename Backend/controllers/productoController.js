var Producto = require('../models/productos');

//datos del formulario(req)

function insert(req, res){
         try{
            let producto = new Producto();
            producto.codigo_barra = req.body.codigo_barra;
            producto.nombre_producto = req.body.nombre_producto;
            producto.precio = req.body.precio;
            producto.unidad = req.body.unidad;
            producto.stock =req.body.stock;
            producto.save((err, productostore)=>{
                if(err){
                    return res.status(400).send({mensaje:'error al intentar guardar en base de datos'});
                }
                res.status(200).send({producto: productostore});
            });

         }
         catch(err){
              res.status(500).send({mensaje:'error:' + err});
         }

}

function eliminar(req,res){
       let codigo_barra = req.params.codigo_barra;
       Producto.findByIdAndDelete(codigo_barra, (err)=>{
        if(err){
            return res.status(500).send({mensaje:'error al eliminar producto de la base de datos'});
        }
        res.status(200).send({mensaje:'Producto eliminado exitosamente'});
    });
     

}

function actualizar(req, res)
{
    let codigo_barra = req.params.codigo_barra;
    nombre_producto = req.body.nombre_producto;
    precio = req.body.precio;
    unidad = req.body.unidad;
    stock =req.body.stock;
    Producto.findByIdAndUpdate(codigo_barra,{nombre_producto:nombre_producto, precio:precio, unidad:unidad, stock:stock}, (err, producto)=>{
        if(err){
            return res.status(500).send({mensaje:'error al actualizar el producto de la base de datos'});
        }
        if(!producto){
            res.status(404).send({mensaje:'producto no encontrado'});
        }
        res.status(200).send({mensaje:'Producto actualizado exitosamente'});

    })
}

function listar(req, res){   
        Producto.find({},(err, producto)=>{
            if(err){
                return res.status(500).send({mensaje:'error al listar los productos de la base de datos'});
            }
            res.status(200).send({producto});
    
        })
}

function buscarProducto(req, res){
    let codigo_barra = req.params.codigo_barra;
    Producto.findById(codigo_barra, (err, producto) =>{
        if(err){
            return res.status(500).send({mensaje:'error al buscar el producto en la base de datos'});
        }
        if(!producto){
            res.status(404).send({mensaje:'producto no encontrado'});
        }
        res.status(200).send({producto});

    })
}
module.exports = {
    insert, eliminar, actualizar, listar, buscarProducto
};
