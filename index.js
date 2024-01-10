const express = require('express');
const Caesar = require('caesar-salad').Caesar;

const app = express();
const port = 8000;

const password = 'password';

app.get('/:text', (req, res) => {
    res.send(req.params.text);
});

app.get('/encode/:text', (req, res) => {
    const inputText = req.params.text;
    const encodedText = Caesar.Cipher(password).crypt(inputText);
    res.send(encodedText);
});

app.get('/decode/:text', (req, res) => {
    const inputText = req.params.text;
    const decodedText = Caesar.Decipher(password).crypt(inputText);
    res.send(decodedText);
});

app.listen(port, () => {
    console.log('Server online on ' + port);
});
