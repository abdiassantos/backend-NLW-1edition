import express from 'express';

const app = express();

app.get('/users', (request, response) => {

    // JSON- javaScript Object Notation    
    response.json([
        'Diego',
        'Abdias',
        'Andressa',
        'Eva'
    ]);
});

app.listen(3333);