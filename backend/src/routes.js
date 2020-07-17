const express = require('express');

const companyController = require('./controllers/CompanyController');

const routes = express.Router();

routes.get('/companies', companyController.index);

routes.post('/companies', companyController.create);

module.exports = routes;