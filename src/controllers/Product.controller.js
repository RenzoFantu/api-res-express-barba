const Product = require("../models/Product.model");


const getProducts = async(req, res) => {

      try {
          const productos = await Product.find({})
    
          res.json({
              productos
          })
    
      } catch (error) {
          res.status(500).json({
              msg: "Hubo un error obteniendo los datos"
          })
      }

}



// app.get("/obtener-producto/:id", async (req, res) => {

//   const { id } = req.params

//   try {
      
//       const producto = await Product.findById(id)

//       res.json({
//           producto
//       })

//   } catch (error) {
//       res.status(500).json({
//           msg: "Hubo un error obteniendo los datos"
//       })
//   }


// })
const createProduct = async (req, res) =>{
 
      const {
          name,
          price,
          description,
          url } = req.body
    
      try {
    
          const nuevoProducto = await Product.create({ name, price, description, url })
    
          res.json(nuevoProducto)
    
      } catch (error) {
    
          res.status(500).json({
              msg: "Hubo un error creando del producto",
              error
          })
        }
    
        }
    



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
    createProduct
}





