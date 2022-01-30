const { Model, DataTypes } = require('sequelize');

class Transaction extends Model{
  static init(sequelize){
    super.init({
      type: DataTypes.CHAR(1),
      value: DataTypes.FLOAT,
    }, {
      freezeTableName: true,
      sequelize,
      modelName: 'transactions'
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', as: 'Users' });
   } 
 }
 
 module.exports = Transaction;