const mongoose = require('mongoose');
const { Schema } = mongoose;

const Pqrs= new Schema({
     
    nombres:  String,
    apellidos: String,
    contacto:  Number,
    correo: String,
    solicitud: String,
    tipo:String
});

module.exports = mongoose.model('Pqrs',Pqrs);