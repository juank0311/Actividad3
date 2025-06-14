const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuración de conexión a la base de datos
const db = mysql.createConnection({
    host: 'db', // Nombre del contenedor de base de datos
    user: 'usuario',
    password: 'password',
    database: 'gestion_financiera'
});

// Conexión a la base de datos
db.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

// Middleware para leer JSON en el cuerpo de las solicitudes
app.use(express.json());

// Ruta para consultar todos los registros
app.get('/transacciones', (req, res) => {
    const query = 'SELECT * FROM transacciones';
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send('Error al consultar la base de datos');
        } else {
            res.json(result);
        }
    });
});

// Ruta para guardar un nuevo registro
app.post('/transacciones', (req, res) => {
    const { descripcion, monto, fecha } = req.body;
    const query = 'INSERT INTO transacciones (descripcion, monto, fecha) VALUES (?, ?, ?)';
    db.query(query, [descripcion, monto, fecha], (err, result) => {
        if (err) {
            res.status(500).send('Error al guardar el registro');
        } else {
            res.status(201).send('Registro guardado con éxito');
        }
    });
});

// Ruta para eliminar un registro por ID
app.delete('/transacciones/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM transacciones WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar el registro');
        } else {
            res.send('Registro eliminado con éxito');
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Aplicación ejecutándose en el puerto ${port}`);
});
