const express = require('express');
const router = express.Router();
// Importamos la nueva función iniciarSesion
const { registrarUsuario, iniciarSesion } = require('../controllers/userController');

// Ruta para registro (POST /api/users/register) - Esta ya la tenías
router.post('/register', registrarUsuario);

// Ruta para inicio de sesión (POST /api/users/login)
router.post('/login', iniciarSesion);

module.exports = router;