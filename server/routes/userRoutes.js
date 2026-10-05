const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/userController');

// Ruta final será: POST /api/users/register
router.post('/register', registrarUsuario);

module.exports = router;