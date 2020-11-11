const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const companyController = require('./controllers/CompanyController');
const orderController = require('./controllers/OrderController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/companies', companyController.index);

routes.post('/companies', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(9).max(13),
        city: Joi.string().required(),
        postalCode: Joi.string().required().length(8),
    })
}), companyController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), profileController.index);

routes.get('/orders', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), orderController.index);

routes.post('/orders', orderController.create);

routes.delete('/orders/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), orderController.delete);

module.exports = routes;