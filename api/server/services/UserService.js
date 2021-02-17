const database = require('../src/models');

class UserService {
  static async getAllUser() {
    try {
      return await database.User.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async addUser(newUser) {
    try {
      return await database.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }
}
