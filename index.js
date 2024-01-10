const express = require('express');
const Caesar = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

const password = 'password';

app.get('/:text', (req, res) => {
    res.send(req.params.text);
});

app.listen(port, () => {
    console.log('Server online on ' + port);
});


