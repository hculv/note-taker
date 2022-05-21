// update

const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

app.use('/api', require('./routes/apiRoutes.js'));

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, () => console.log(`Live on port: ${PORT}`));