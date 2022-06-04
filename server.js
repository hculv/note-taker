
const express = require('express');


const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use('/routes', require('./routes/apiRoute.js'));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));