const OrderService = require('../services/order.service');

class OrderController {
	constructor(){
		this.orderService = new OrderService();
	}

	async getAllOrders (req, res) {
	try{
		const orders = await this.orderService.getAllOrders();
		res.status(200).json(orders);
	}catch(error){
		res.status(500).json({error: error.message});
	}
}

async createOrder(req, res) {
	const orderData = req.body;
	try{
		const newOrder = this.orderService.createOrder(orderData);
		if(newOrder){
			res.status(201).json(newOrder);
		} 
		 throw new Error('Order not found');
		}
		catch(error){
			res.status(500).json({error: error.message});
		}
}

async updateOrder (req, res) {
	const {id} = req.params;
	const orderData = req.body;
	try{
		const updatedData = await this.orderService.updateOrder(id, userData);
		res.status(200).json(updateOrder);
	}catch(error){
		res.status(500).json({error: error.message});
	}
}

async deleteOrder(req, res){
	const { id } =  req.params;
	try{
		const deletedOrder = this.orderService.deleteOrder(id);
		res.status(200).json({message: 'Order deleted successfully'});
	}catch(error){
		res.status(500).json({error: error.message})
	}
}

}

module.exports = OrderController;