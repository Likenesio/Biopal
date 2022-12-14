'use strict'
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');

app.use(cors());
app.options('*', cors())

var producto_route = require('./routes/productoRoute');

const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', producto_route);

const options = {
    useNewUrlParser: true,

    autoIndex: true, //this is the code I added that solved it all
    keepAlive: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4, // Use IPv4, skip trying IPv6
  }
  
module.exports = app;
mongoose.connect('mongodb://localhost:27017/Biopal', options)
.then(() => console.log('> Successfully connected to DB')).catch(err => console.log(err))

app.listen(5000, () => {

    console.log('> Servicio corriendo en puerto 5000')
})



module.exports = app;
