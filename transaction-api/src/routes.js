const express = require('express');
const TransactionController = require('./controllers/TransactionsController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Connected!');
});

routes.get('/transactions', TransactionController.index);
routes.post('/transaction', TransactionController.store);

module.exports = routes;