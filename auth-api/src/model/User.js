const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      password: DataTypes.STRING,
      balance: DataTypes.FLOAT
    }, {
      sequelize,
      modelName: 'User'
    })
  }
}

module.exports = User;