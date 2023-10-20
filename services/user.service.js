const User = require('../models/User'); // import user model

class UserService {
    // fetch all users from the database
async getAllUsers (){
    try{
        const users =  await User.findAll();
        return users;
    } catch (error) {
        throw new Error(`failed to fetch users: ${error.message}`);
    }
};

// create a new user
async createUser (userData) {
    try{
        const newUser = await User.create(userData);
        return newUser;
    } catch(error){
        throw new Error(`failed to create user: ${error.message}`);
    }
}

// update an existing user in the database
async updateUser (id, userData) {
    try{
        const [updated] = await User.update(userData, { where: { id }});
        if(updated) {
            const updatedUser = await User.findByPk(id);
            return updatedUser;
        }
        throw new Error('User not found');
    }catch(error) {
        throw new Error(`failed to update user: ${error.message}`);
    }
}

async deleteUser (id) {
    try{
        const deletedUser = await User.destroy({ where: { id }});
        if(deletedUser){
            return;
        }
        throw new Error('User not found');
    } catch (error) {
        throw new Error(`faled to delete user: ${ error.message }`);
    }
}
}


module.exports = UserService;