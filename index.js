
import express from 'express';
import usuario from './routes/usuario.routes.js';

//Crear la app
const app = express();


//Habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views');

//Roting
app.use('/auth', usuario);

//Definir un puerto y arrancar el proyecto
const port = 4000;
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})