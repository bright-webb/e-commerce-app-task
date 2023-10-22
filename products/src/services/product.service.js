const Product = require('../models/Product');

class ProductService{

    // fetch all products
    static async getAllProducts ()  {
    try{
        const products = await Product.findAll();
        return products;
    }catch(error) {
        throw new Error(`Failed to fetch products: ${error.message}`);
    }
};


// get a specific product details by product id
static async productDetail (id){
    try{
        const product = Product.findByPk(id);
        if(product){
            return product;
        }
        throw new Error('Product not found');
    }
    catch(error){
        throw new Error (`There was an error ${ error.message }`);
    }
}
}

module.exports = ProductService;