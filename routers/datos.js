const { Router } = require('express');
const router = Router();
const faker = require('faker');
const Dato = require('../models/Datos');
module.exports = router;

router.get('/', (req, res) => {
    res.send('Listo!');
});

router.get('/api/datos', async(req, res) => {
    const datos = await Dato.find();
    res.json({ datos });
});

router.get('/api/datos/create', async(req, res) => {
    for (let i = 0; i < 2; i++) {
        await Dato.create({
            id: faker.random.number(),
            mensaje: faker.random.word(),
            versiculo: faker.internet.url(),
            url: faker.internet.url()

        });
    }
    res.json({ message: '5 rutas creadas' });
});