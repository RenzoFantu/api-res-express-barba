// src/routes/Product.router.js
const express = require('express');
const router = express.Router();
const { getProducts, createProduct, getProductId } = require('../controllers/Product.controller');

router.get('/', getProducts);
router.get('/:_id', getProductId )
router.post('/', createProduct)


module.exports = router;
