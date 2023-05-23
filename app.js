// Requires
var express = require('express');
var bodyParser = require('body-parser')

// inicializar variables
var app = express();

//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Importar Rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuarios');
var loginRoutes = require('./routes/login');
var jugarRoutes = require('./routes/jugar');

// Rutas (Middleware)
app.use('/', appRoutes);
app.use('/user', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/jugar', jugarRoutes);

// Escuchar peticion (puerto)
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});