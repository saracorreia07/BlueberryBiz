const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {

        const companies = await connection('companies').select('*');

        return response.json(companies);
    },

    async create(request, response) {

        const { name, email, whatsapp, city, postalCode } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('companies').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            postalCode
        })

        return response.json({ id });

    }
};