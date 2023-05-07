import express from "express";

const router = express.Router();

//Routing
app.get('/', function (req, res) {
    res.send('Hola mundo en express')
});
app.get('/nosotros', function (req, res) {
    res.send('Información de nosotros')
});

export default router;