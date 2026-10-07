const pool = require('../config/db');

const obtenerPlanes = async (req, res) => {
    try {
        // Seleccionamos solo los planes que estén activos
        const [planes] = await pool.query('SELECT * FROM planes WHERE activo = TRUE');
        res.status(200).json(planes);
    } catch (error) {
        console.error('Error al obtener planes:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor al cargar los planes' });
    }
};

module.exports = { obtenerPlanes };