const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');
const productController = new ProductController();

router.get('/products', productController.getAllProducts.bind(ProductController));
router.get('/product/:id', productController.productDetail.bind(ProductController));
module.exports = router;