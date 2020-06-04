import express from 'express';

const app = express();

app.get('/users', (request, response) => {

    // JSON- javaScript Object Notation    
    response.json([
        'Diego',
        'Abdias',
        'Andressa',
        'Eva',
        'Jéssica',
        'Alessandra',
        'José',
        'Jucimar',
        'Andréia',
        'Felipe',
        'André',
        'Rodrigo',
        'Paulo',
        'Mariana',
        'Lia',
        'Aline',
        'Maria',
        'Alice',
        'Pedro',
        'Adriano',
        'Marcelo',
        'Marina'
    ]);
});

app.listen(3333);