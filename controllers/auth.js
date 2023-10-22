const express = require('express');
const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res = express.response) => {

    const { name, email, password } = req.body;

    try {

        // Validar si existe un usuario con ese email
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({
                ok: true,
                msg: 'Ya hay un usuario utilizando ese correo'
            })
        }

        usuario = new Usuario(req.body);

        await usuario.save();

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }

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