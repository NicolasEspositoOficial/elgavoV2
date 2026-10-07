const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // <-- LIBRERÍA IMPORTADA AQUÍ
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
}; // <-- LLAVE DE CIERRE AGREGADA AQUÍ

const iniciarSesion = async (req, res) => {
    // 1. Extraemos los datos que el usuario escribió en React
    const { correo, contrasena } = req.body;

    try {
        // 2. Buscamos al usuario en la base de datos por su correo
        const [usuarios] = await pool.query(
            'SELECT * FROM usuarios WHERE correo_usuario = ?', 
            [correo]
        );

        // Si el arreglo está vacío, el usuario no existe
        if (usuarios.length === 0) {
            return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos.' });
        }

        const usuario = usuarios[0]; // Guardamos los datos del usuario encontrado

        // 3. Comparamos la contraseña escrita con la encriptada en la base de datos
        const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena_usuario);

        if (!contrasenaValida) {
            return res.status(401).json({ mensaje: 'Correo o contraseña incorrectos.' });
        }

        // 4. Si todo está bien, creamos el Token de sesión (JWT)
        // Usamos la clave secreta que ya tienes en tu archivo .env
        const token = jwt.sign(
            { id: usuario.id_usuario, rol: usuario.rol_usuario },
            process.env.JWT_SECRET,
            { expiresIn: '24h' } // El token durará 24 horas
        );

        // 5. Enviamos el token y los datos básicos (sin la contraseña) al frontend
        res.status(200).json({
            mensaje: 'Inicio de sesión exitoso',
            token: token,
            usuario: {
                nombre: usuario.nombre_usuario,
                apellidos: usuario.apellidos_usuario,
                rol: usuario.rol_usuario
            }
        });

    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};

// Asegúrate de exportar ambas funciones al final del archivo
module.exports = { registrarUsuario, iniciarSesion };
