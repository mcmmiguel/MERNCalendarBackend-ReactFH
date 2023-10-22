const express = require('express');

const crearUsuario = (req, res = express.response) => {

    const { name, email, password } = req.body;

    if (name.length < 5) {
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe de tener más de 5 caracteres',
        })
    }

    res.json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password,
    });
};

const loginUsuario = (req, res = express.response) => {

    const { name, email, password } = req.body;

    res.json({
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