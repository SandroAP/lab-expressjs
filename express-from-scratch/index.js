const express = require('express');
const app = express();
const port = 3000;

// Routes
app.get('/', (request, response, next) => response.send('Hello World'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));