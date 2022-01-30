const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/', (req, res) => { res.send('Connection success!'); });
routes.get('/delete', UserController.delete);
routes.post('/login', UserController.checkLogin);
routes.post('/register', UserController.store);
routes.get('/users/:id', UserController.index);
routes.put('/users/:id', UserController.update);

module.exports = routes;