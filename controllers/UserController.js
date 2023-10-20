const { json } = require('sequelize');
const UserService = require('../services/user.service');

class UserController {
    constructor(){
        this.userService = new UserService();
    }

    async getAllUsers (req, res) {
    try{
        const users = await this.userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

async createUser (req, res) {
    const userData = req.body;
    try{
        const newUser = await this.userService.createUser(userData);
        res.status(201).json(newUser);
    }catch(error){
        res.status(500).json({error: error.messsage});
    }
}

async updateUser (req, res) {
    const { id } = req.params;
    const userData = req.body;

    try{
        const updatedUser = await this.userService.updateUser(id, userData);
        res.status(200).json(updatedUser);
    }catch(error) {
        res.status(500).json({ error: error.message });
    }
};

async deleteUser(req, res) {
    const { id } = req.params;
    try{
        await this.userService.deleteUers(id);
        res.status(200).json({ message: 'User deleted successfully' });
    }catch (error) {
        res.status(500).json({ error: error.message});
    }
}
}

module.exports = UserController;