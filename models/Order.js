const { DataTypes } = require('sequelize');
const sequelize = require('../configuration/database');

const Order = sequelize.define('Order', {
    orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },

    orderDate: {
        type: DataTypes.DATE,
        allowNull: false
    },

    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending'
    }
});

module.exports = Order;