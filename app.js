const express = require('express');
const app = express();
const datos = require('./routers/datos');
const { connect } = require('./database');


app.use(express.json());
//instancia metodos de rutas datos.
app.use('', datos);
//conecta la base de datos
connect();

//Puerto de coneccion
const port = process.env.PORT || '4000';
app.listen(port, () => console.log(`Server started on Port ${port}`));