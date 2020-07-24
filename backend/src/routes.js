const express = require('express');

const companyController = require('./controllers/CompanyController');
const orderController = require('./controllers/OrderController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/companies', companyController.index);
routes.post('/companies', companyController.create);

routes.get('/profile', profileController.index);

routes.get('/orders', orderController.index);
routes.post('/orders', orderController.create);
routes.delete('/orders/:id', orderController.delete);

module.exports = routes;