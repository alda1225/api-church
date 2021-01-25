const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb+srv://alda1225:Alda1225.@cluster0.btqk8.mongodb.net/flutter_church?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database: connected');
};

module.exports = { connect };