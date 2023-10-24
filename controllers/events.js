const { response } = require('express');
const Evento = require('../models/Evento');

const getEventos = async (req, res = response) => {

    const eventos = await Evento.find()
        .populate('user', 'name');

    res.json({
        ok: true,
        msg: eventos,
    })
}
const crearEvento = async (req, res = response, next) => {

    const evento = new Evento(req.body);

    try {

        evento.user = req.uid;
        const eventoGuardado = await evento.save();

        res.json({
            ok: true,
            evento: eventoGuardado,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador',
        });
    }
}
const actualizarEvento = async (req, res = response, next) => {

    const eventoID = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoID);
        if (!evento) {
            res.status(404).json({
                ok: false,
                msg: 'No existe evento con ese ID'
            });
        }

        if (evento.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene el privilegio para editar este evento',
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: uid,
        };

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoID, nuevoEvento, { new: true });

        res.json({
            ok: true,
            evento: eventoActualizado,
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }

}
const eliminarEvento = (req, res = response, next) => {

    res.json({
        ok: true,
        msg: 'eliminarEvento'
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento,
}