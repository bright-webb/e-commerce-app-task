const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


sequelize.sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Error synchronizing models:', error);
  });

  const createDummyProducts = async () => {
  try {
    await Product.sync({ force: true }); 

    await Product.bulkCreate([
      {
        productName: 'Product 1',
        description: 'Description of product 1',
        price: 10.99
      },
      {
        productName: 'Product 2',
        description: 'Description of product 2',
        price: 19.99
      },

    ]);
    console.log('Dummy products created successfully.');
  } catch (error) {
    console.error('Error creating dummy products:', error);
  }
};

// Call the function to create dummy products
createDummyProducts();

module.exports = Product;
