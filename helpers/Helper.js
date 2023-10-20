const bycrypt = require('bcryptjs');
const crypto = require('crypto');

class Helpers{
	// generate secret key
static generateSecretKey() {
  return crypto.randomBytes(64).toString('hex');
}

static async hashPassword (password) {
	try{
		const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
	} catch (error) {
		throw new Error(`Error hashing password: ${error}`);
	}
}

//compare password if they are matched
static async comparePassword (inputPassword, hashedPassword) {
	try{
		 const hash = crypto.createHash('sha256');
	    hash.update(inputPassword);
	    const inputHashedPassword = hash.digest('hex');
	    return inputHashedPassword === hashedPassword;
	} catch(error){
		throw new Error('passwords do not match');
	}
}
}

module.exports = Helpers;