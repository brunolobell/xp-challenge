const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../app/models/Users')
const Transactions = require('../app/models/Transactions'); 

async function checkConnection(connection) {
  await connection.authenticate().then(resp => console.log("Connection Success!")).catch(err => console.error(err));
}

const connection = new Sequelize(dbConfig);
connection.sync().then(() => console.log("DB connected!")).catch((err) => console.error(err));
checkConnection(connection);

User.init(connection);
Transactions.init(connection);

Transactions.associate(connection.models);

module.exports = connection;