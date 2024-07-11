// src/routes/Product.router.js
const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('../controllers/Product.controller');

router.get('/obtener-productos', getProducts);
router.post('/crear-productos', createProduct)


module.exports = router;
