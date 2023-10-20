const ProductService = require('../services/product.service');

class ProductController {

    async getAllProducts (req, res) {
    try{
        const products = await ProductService.getAllProducts(); // fetch all products
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({error: error.message});
    }
}

async productDetail (req, res){
    const {id} = req.params;
    try{
        const productDetail = await ProductService.roductDetail(id);
        res.status(201).json(productDetail);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

}

module.exports = ProductController;