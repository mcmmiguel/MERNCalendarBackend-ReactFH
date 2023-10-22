const express = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = express.response) => {

    const { name, email, password } = req.body;

    // Manejo de errores
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        });
    }

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password,
    });
};

const loginUsuario = (req, res = express.response) => {

    const { name, email, password } = req.body;

    // Manejo de errores
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        });
    }

    res.status(201).json({
        ok: true,
        msg: 'login'
    })
}
const revalidarToken = (req, res = express.response) => {

    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};