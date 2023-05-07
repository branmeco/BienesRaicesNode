import express from "express";

const router = express.Router();

//Routing
router.get('/', (req, res) => {
    res.send('Hola mundo en express');
});

router.post('/', (req, res) => {
    res.json({msg: 'Información de nosotros'});
});

export default router;