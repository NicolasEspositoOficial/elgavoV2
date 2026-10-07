const express = require('express');
const router = express.Router();
const { obtenerPlanes } = require('../controllers/planController');

// Ruta final: GET /api/planes
router.get('/', obtenerPlanes);

module.exports = router;