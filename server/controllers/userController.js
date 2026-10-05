const bcrypt = require('bcrypt');
const pool = require('../config/db'); // Tu conexión a Hostinger

const registrarUsuario = async (req, res) => {
    // Extraemos los datos que llegarán desde el formulario de React
    const { nombre, apellidos, correo, contrasena, fechaNacimiento, telefono } = req.body;

    try {
        // 1. Encriptar la contraseña por seguridad
        const salt = await bcrypt.genSalt(10);
        const contrasenaEncriptada = await bcrypt.hash(contrasena, salt);

        // 2. Guardar en la base de datos (rol_usuario, plan y estado se llenan solos por defecto)
        const query = `
            INSERT INTO usuarios 
            (nombre_usuario, apellidos_usuario, correo_usuario, contrasena_usuario, fechanacimiento_usuario, telefono_usuario) 
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const valores = [nombre, apellidos, correo, contrasenaEncriptada, fechaNacimiento, telefono];

        const [resultado] = await pool.query(query, valores);

        res.status(201).json({
            mensaje: 'Estudiante registrado con éxito',
            id_usuario: resultado.insertId
        });

    } catch (error) {
        console.error('Error al registrar usuario:', error);
        // Si el correo ya existe, MySQL arroja el error ER_DUP_ENTRY gracias a tu índice UNIQUE
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ mensaje: 'Este correo ya está registrado en elgavo.' });
        }
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

module.exports = { registrarUsuario };
