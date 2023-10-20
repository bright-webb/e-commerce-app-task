const jwt = require('jsonwebtoken');
const  User  = require('../models/User');
const Helpers = require('../helpers/Helper');


class AuthService {

		// service to handle user registration with methods from the Helper class
	  static async register(userData) {
    try {
      const { email, username, password } = userData;
      const isExistingEmail = await User.findOne({ where: { email } });
      const isExistingUsername = await User.findOne({ where: { username } });

      if (isExistingEmail) throw new Error('User already exists with this email address');
      if (isExistingUsername) throw new Error('User already exists with this username');

      const hashedPassword = await Helpers.hashPassword(password);
      const newUser = await User.create({ email, username, password: hashedPassword });
      const token = jwt.sign({ userId: newUser.id }, Helpers.generateSecretKey(), { expiresIn: '1h' }); 

      return { token, tokenType: 'Bearer' };
    } catch (error) {
      throw new Error(`Error registering user: ${error.message}`);
    }
  }

	static async login(email, password){
		try {
			const user =  await User.findOne({ where: { email } });
			if(!user) throw new Error('User not found');
			const isMatch = await Helpers.comparePasswords(password, user.password);
			if(isMatch) throw new Error('invalid login credentials');

			const token = jwt.sign({ userid: user.id}, Helpers.generateSecretKey(), { expiresIn: '1h'});

			return { token, tokenType: 'Bearer'};
		} catch (error){
			throw new Error(`Error logging in: ${error.message}`)
		}
	}
}

module.exports = AuthService;