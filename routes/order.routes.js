const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order.controller');
const orderContoller = new OrderController();
router.get('/orders', orderContoller.getAllOrders.bind(OrderController));
router.post('/orders', orderContoller.createOrder.bind(OrderController));
router.put('/orders/:id', orderContoller.updateOrder.bind(OrderController));
router.delete('/orders/:id', orderContoller.deleteOrder.bind(OrderController));

module.exports = router;