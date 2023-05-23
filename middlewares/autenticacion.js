// Requires
var jwt = require('jsonwebtoken');
var SEED = require('../config/config').SEED;

// ==================================================
// Verificar Token - Middleware
// ==================================================
exports.verificaToken = function(req, res, next) {
    
    var token = req.headers['authorization'];
    if(typeof token !== 'undefined'){
        const bearer = token.split(' ');
        const bearerToken = bearer[1];
        
        jwt.verify(bearerToken, SEED, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    ok: false,
                    mensaje: 'Token incorrecto',
                    errors: err
                });
            }
            req.usuario = decoded.firstname;
            /*res.status(200).json({
                ok: true,
                decoded: decoded
            }); */
            next();
        });
    }
    
}