const AuthService = require('../services/auth.service');

class AuthController {
	// method to handle user registration
	static async register(req, res){
		const userData = req.body;
		try{
			
			const tokenData = await AuthService.register(userData);
			res.status(200).json(tokenData);
		} catch (error) {
			res.status(500).json({ error: error.message});
		}
	}

	// log user in
	static async login(req, res){
		const { email, password } = req.body;
		try{
			const tokenData = await AuthService.login(email, password);
			res.status(200).json(tokenData);
		} catch (error) {
			res.status(200).json({error: error.message });
		}
	}
}


module.exports = AuthController;