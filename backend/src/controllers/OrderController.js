const connection = require('../database/connection');
const { index } = require('./CompanyController');

module.exports = {

    async index(request, response) {
        const orders = await connection('orders').select('*');
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const company_id = request.headers.authorization;

        const [id] = await connection('orders').insert({
            title,
            description,
            value,
            company_id
        });

        return response.json({ id });
    }
};