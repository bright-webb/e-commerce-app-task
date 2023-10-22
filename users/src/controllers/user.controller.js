const { json } = require('sequelize');
const UserService = require('../services/user.service');


class UserController {
	constructor(){
		this.userService = new UserService();
	}
	async registerUser(req, res) {
        const userData = req.body;
        try {
            const newUser = await UserService.createUser(userData);
            res.status(200).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports =  UserController;