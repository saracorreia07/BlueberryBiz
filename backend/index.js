const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        product: 'Blueberries',
        buyer: 'Sara Correia'
    })
});

app.listen(3333);