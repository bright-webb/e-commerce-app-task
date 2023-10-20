const jwt = require('jsonwebtoken');
const User = require('../models/User');

class AuthMiddleware {
	static async authenticate(req, res, next){
		const token = req.header('Authorization').replace('Bearer ', '');
		try{
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			const user = await User.findOne({ userId: decoded.userId, 'tokens.token': token });
			if(!user){
				throw new Error();
			}
			req.user = user;
			req.token = token;
			next();
		} catch(error){
			res.status(401).send({ error: 'Please authenticate'});
		}
	}
}

module.exports = AuthMiddleware;