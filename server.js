const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;

// Middleware
app.use('/api', require('./routes/apiRoutes.js'));

app.use(express.static('public'));

// Routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/Public/notes.html'));
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Publicublic/index.html'))
})

// Listening
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));