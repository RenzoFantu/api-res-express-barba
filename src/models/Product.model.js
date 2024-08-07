const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
},
{
    timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
