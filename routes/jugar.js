// Requires
var express = require('express');
var bcrypt = require('bcryptjs');
var connection = require('../conexion/server/conexion');
var jwt = require('jsonwebtoken');
var mdAutenticacion = require('../middlewares/autenticacion');

var app = express();

app.get('/', mdAutenticacion.verificaToken,(req, res, next) => {
    var suma_casos = 0;
    var mayor = 0;
    var porcentaje = 0;
    var opcion_acumular = '';
    var array_nombre = [];
    var array_probabilidad = [];
    var post = { 
        opciones: req.body
    };
    var opciones = Object.keys(req.body);
    for(var i = 0; i < opciones.length; i++)
    {
        var casos = Object.values(req.body[opciones[i]]);
        for(var j = 0; j < casos.length; j++)
        {
            array_nombre.push(casos[j]);
            if(j=1){
                array_probabilidad.push(casos[j]);
                suma_casos = casos[j]+suma_casos;
                mayor = Math.max(casos[j], mayor);
            }
        }
    }
    var nombre_repetido = '';
    var probabilidad_repetida = 0;
    if(suma_casos <= 100){
        let toMap = {};
        let resultToReturn = false;
        for (let i = 0; i < array_nombre.length; i++) {
            for(var k = 0; k < array_nombre.length; k++)
            {
                if (i !== k) {
                    if(array_nombre[i] === array_nombre[k]){
                        nombre_repetido = array_nombre[i];
                        probabilidad_repetida = array_probabilidad[i] + probabilidad_repetida;
                    }
                }
            }
        }
    
        array_probabilidad.push(probabilidad_repetida);
        mayor = Math.max(...array_probabilidad);
        return res.status(200).json({
            ok: true,
            body: 'La probabilidad mas alta',
            probabilidad: mayor,
            usuariotoken: req.usuario
        });
    }else{
        return res.status(500).json({
            ok: false,
            mensaje: 'La suma de probabilidades no puede ser mayor que 100'
        });
    }
});

module.exports = app;