/*
    Rutas de usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const router = Router();
const { check } = require('express-validator');

router.post('/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
    ],
    crearUsuario);

router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
    ],
    loginUsuario);

router.get('/renew', revalidarToken);



module.exports = router;
