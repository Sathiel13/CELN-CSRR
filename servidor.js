// Importar el módulo Express
const express = require('express');

// Crear una aplicación Express
const app = express();

// Definir el puerto en el que estará escuchando el servidor
const PORT = 3000;

// Ruta principal (GET /)
app.get('/', (req, res) => {
    res.send('¡Hola, mundo! Este es un servidor básico con Node.js y Express.');
});

// Ruta secundaria (GET /saludo)
app.get('/saludo', (req, res) => {
    res.send('¡Hola! Espero que tengas un buen día 😊');
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});