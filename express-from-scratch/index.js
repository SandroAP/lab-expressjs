const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// Reciben una petición: request
// Resuelven una petición: response
// Middleware: next

// GET /
app.get('/', (request, response, next) => response.send('Hello World'));
app.get('/users', (request, response, next) => response.json([{ id: 1, name: 'Javier'}]));

// Query Params
app.get('/search', (request, response, next) => {
    const { query: { s } } = request;
    console.log(s);
    response.json({ data: s });
});

// Login
app.post('/login', (request, response, next) => {
    const emailExample = 'hello@coderdiaz.me';
    const passwordExample = '1234567890';

    const { body: { email, password } } = request;

    if (email === emailExample && password === passwordExample) {
        return response.status(200).json({
            message: 'Login Successful',
        });
    }

    return response.status(401).json({
        message: 'Invalid Credentials',
    });
});

// Params in Routes
app.get('/users/:id', (request, response, next) => {
    const { params: { id } } = request;
    console.log(id);
    return response.json({
        id,
    });
});

app.get('/users/:id/profile', (request, response, next) => {
    const { params: { id } } = request;
    console.log(id);
    return response.json({
        profile: {
            name: 'Bruce Wayne',
            age: 'NA'
        }
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));