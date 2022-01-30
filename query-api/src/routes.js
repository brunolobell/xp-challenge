const express = require('express');
const QueriesController = require('./controllers/QueriesController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Connected!');
});

routes.get('/balance', QueriesController.balance);
routes.get('/statement', QueriesController.statement);

module.exports = routes;