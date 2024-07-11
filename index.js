require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./src/routes/index'); // Archivo que contiene otras rutas
const productRoutes = require('./src/routes/Product.routes'); // Asegúrate de que la ruta sea correcta
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
app.use('/v1', routes); // Asegúrate de que 'routes' no contenga rutas que puedan causar conflictos con 'productRoutes'
app.use('/v1/products', productRoutes); // Coloca esta ruta después de '/v1' para evitar conflictos

app.get('/', (req, res) => {
  res.send('todo OK');
});

app.listen(port, () => {
  console.log('Servidor iniciado en el puerto ' + port);
});





//http:localhost:3000/v1