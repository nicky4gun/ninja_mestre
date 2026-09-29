const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Serveren Kører');
});

app.listen(3000, () => {
    console.log('Serveren kører på port 3000');
});