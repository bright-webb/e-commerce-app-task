const axios = require('axios');
require('dotenv').config();

const productUrl = process.env.PRODUCT_SERVICE_URL || 'http://localhost:6000/api';

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await axios.get(`${productUrl}/products`);
      res.status(200).json(products.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProductController;
