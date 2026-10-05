const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Inicializamos la conexión a la base de datos para verificar que funciona
require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// ---------------------------------------------------
// RUTAS DE LA API (Backend)
// ---------------------------------------------------
app.get('/api/test', (req, res) => {
    res.json({ message: 'API de elgavo funcionando al 100%' });
});

// Aquí irán tus rutas futuras:
app.use('/api/users', require('./routes/userRoutes'));
// app.use('/api/payments', require('./routes/paymentRoutes'));

// ---------------------------------------------------
// CONFIGURACIÓN PARA HOSTINGER (Producción)
// ---------------------------------------------------
// Vite genera la carpeta 'dist' un nivel arriba del servidor.
const clientDistPath = path.join(__dirname, '../dist');
app.use(express.static(clientDistPath));

app.use((req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor de elgavo corriendo en el puerto ${PORT}`);
});