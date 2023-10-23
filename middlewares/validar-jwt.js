const express = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = express.response, next) => {

    // x-token Headers
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay un token en la validación',
        });
    }

    try {

        const payload = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        );

        req.uid = payload.uid;
        req.name = payload.name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido',
        })
    }


    next();

};

module.exports = {
    validarJWT,
}
