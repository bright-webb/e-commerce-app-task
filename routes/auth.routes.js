const express = require('express');
const router = express.Router();
const AuthMiddleare = require('../middleware/auth.middleware');

const AuthController = require('../controllers/auth.controller');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

// middleware to access authorized pages
router.get('/account', AuthMiddleare.authenticate, (req, res) => {
	// do some shit
});

module.exports = router;