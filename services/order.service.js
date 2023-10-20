const Order = require('../models/Order');

class OrderService {
	// fetch all orders from the database
static async getAllOrders() {
	try{
		const orders = await Order.findAll();
		return orders;
	} catch (error) {
		throw new Error(`failed to fetch orders ${error.message}`);
	}
};

// create a new order
static async createOrder(orderData) {
	try {
		const newOrder = await Order.create(orderData);
		return newOrder;
	} catch (error) {
		throw new Error(`failed to create order: ${error.message}`);
	}
};

// update an existing order;
static async updateOrder(id, orderData) {
	try{
		const [updated] = await Order.update(orderData, { where: {id}});
		if(updated) {
			const updatedData = await Order.findByPk(id);
			return updatedData;
		} 
		throw new Error('Order not found');
	}
	catch(error){
			throw new Error(`There wan an error updating order ${error.message}`);
		}
}

// delete order
static async deleteOrder(id) {
	const deletedOrder = await Order.destroy({ where: { id }});
	if(deletedOrder) {
		return;
	}
	throw new Error('Order not found');
}catch(error) {
	throw new Error(`Failed to delete order: ${error.message}`);
}

}

module.exports = OrderService;