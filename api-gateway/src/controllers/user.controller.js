const axios = require('axios');
require('dotenv').config();

const userUrl = process.env.USER_SERVICE_URL || 'http://localhost:5001/api';

const userController = {
	registerUser: async(req, res) => {
		const {username, email, password } = req.body;
		const userData = { username, email, password}
		try{
			await axios.post(`${userUrl}/register`, userData);
			res.status(201).json({message: 'User registered'});
		}
		catch(error) {
			res.status(500).json({error: error.message});
		}
	}
}

module.exports = userController;