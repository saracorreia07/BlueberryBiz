const connection = require('../database/connection');
const { index } = require('./CompanyController');

module.exports = {

    async index(request, response) {
        const orders = await connection('orders').select('*');

        return response.json(orders);
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
    },

    async delete(request, response) {
        const { id } = request.params;
        const company_id = request.headers.authorization;

        const order = await connection('orders').where('id', id).select('company_id').first();

        if (order.company_id !== company_id) {
            return response.status(401).json({ error: 'Operation denied' }); 
        }

        await connection('orders').where('id', id).delete();

        return response.status(204).send();
    }
};