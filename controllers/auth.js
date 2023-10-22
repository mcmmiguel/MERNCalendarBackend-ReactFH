const express = require('express');

const crearUsuario = (req, res = express.response) => {

    const { name, email, password } = req.body;

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