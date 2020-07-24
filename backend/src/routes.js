const express = require('express');

const companyController = require('./controllers/CompanyController');
const orderController = require('./controllers/OrderController');

const routes = express.Router();

routes.get('/companies', companyController.index);
routes.post('/companies', companyController.create);

routes.get('/orders', orderController.index);
routes.post('/orders', orderController.create);
routes.delete('/orders/:id', orderController.delete);

module.exports = routes;