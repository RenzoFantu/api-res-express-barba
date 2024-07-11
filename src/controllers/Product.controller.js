const Product = require("../models/Product.model");

// Obtener todos los productos
const getProducts = async (req, res) => {
    try {
        const response = await Product.find();
        console.log(response);
        if (response) {
            return res.json({
                message: 'Products',
                detail: response
            });
        }
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return res.status(500).json({
            message: 'Error al obtener productos',
            error: error.message
        });
    }
};

// Obtener un producto por ID
const getProductId = async (req, res) => {
    try {
        const product = await Product.findById(req.params._id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ producto: product });
    } catch (error) {
        console.error('Error al obtener producto por ID:', error);
        res.status(500).json({ message: 'Error al obtener producto por ID', error });
    }
};

// Crear un nuevo producto
const createProduct = async (req, res) => {
    const { name, price, description, url } = req.body;

    try {
        const nuevoProducto = await Product.create({ name, price, description, url });
        res.json(nuevoProducto);
    } catch (error) {
        console.error('Error al crear producto:', error);
        res.status(500).json({
            msg: "Hubo un error creando el producto",
            error: error.message
        });
    }
};



    



// app.put("/actualizar-producto", async (req, res) => {

//   const { id, name, price } = req.body

//   try {
//       const actualizacionProducto = await Product.findByIdAndUpdate(id, { name, price }, { new: true })

//       res.json(actualizacionProducto)

//   } catch (error) {

//       res.status(500).json({
//           msg: "Hubo un error actualizando la guitarra"
//       })

//   }


// })

// app.delete("/borrar-producto", async (req, res) => {

//   const { id } = req.body

//   try {

//       const productoBorrado = await Product.findByIdAndRemove({ _id: id })

//       res.json(productoBorrado)


//   } catch (error) {
//       res.status(500).json({
//           msg: "Hubo un error borrando la guitarra especificada"
//       })
//   }

// })

module.exports = {
    getProducts,
    createProduct,
    getProductId
};





