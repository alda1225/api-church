const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    id: Number,
    mensaje: String,
    versiculo: String,
    url: String
});

module.exports = model('Datos', userSchema);