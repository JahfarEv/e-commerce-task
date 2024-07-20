const express = require('express')
const productController = require('../controllers/productController');
const uploadCloudinary = require('../middlewares/multer');

const productRouter = express.Router();

productRouter
.post('/create',uploadCloudinary, productController.newProduct)
.get('', productController.getProduct)
.get('/:id', productController.getProductById)
.put('/update/:id',uploadCloudinary, productController.updateProduct)
.delete('/delete/:id', productController.deleteProduct)

module.exports = productRouter