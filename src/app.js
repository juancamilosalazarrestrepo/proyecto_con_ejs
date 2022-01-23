// Módulos
const express = require('express');
const app = express();
const path = require('path');
// Acá falta uno... 😇
const indexRouter = require('./routes/mainRouter'); 

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.set('view engine','ejs');
app.set('views','./src/views');


// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.use(indexRouter);


app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})