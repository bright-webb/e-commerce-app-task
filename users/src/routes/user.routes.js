const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

const userController = new UserController();

router.post('/register', userController.registerUser.bind(UserController));

module.exports = router;