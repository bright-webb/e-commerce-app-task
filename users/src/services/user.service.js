const User = require('../models/User'); // import user model
const Helpers = require('../helpers/Helper');
const jwt = require('jsonwebtoken');

class UserService {
    // Create new user
    static async createUser(userData) {
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
}

module.exports = UserService;
