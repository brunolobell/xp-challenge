const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../model/User'); 

async function checkConnection(connection) {
  await connection.authenticate().then(resp => console.log(resp)).catch(err => console.error(err));
}

const connection = new Sequelize(dbConfig);
connection.sync().then(() => console.log("DB connected!")).catch((err) => console.error(err));
checkConnection(connection);

User.init(connection);

module.exports = connection;