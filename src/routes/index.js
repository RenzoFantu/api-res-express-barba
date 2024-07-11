const express = require('express');
const router = express.Router();
const userRoutes = require('./User.router');
const postRoutes = require('./Productst.router');
const categoryRoutes = require('./Category.router');

router.use('/users', userRoutes);
router.use('/products', postRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
//http:localhost:3000/v1/users
//http:localhost:3000/v1/products
//http:localhost:3000/v1/categories