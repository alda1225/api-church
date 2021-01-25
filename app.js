const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const movies = require('./movies');
const datos = require('./routers/datos');
const { connect } = require('./database');

connect();
app.use(express.json());

//app.use('/abc', movies);
app.use('/data', datos);


app.get('/', (req, res) => {
    res.send('EN HORA BUENA');
})
const port = process.env.PORT || '4000';
app.listen(port, () => console.log(`Server started on Port ${port}`));
console.log('server on port 4001');