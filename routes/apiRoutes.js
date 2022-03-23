const fs = require('fs');
const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');

let notes = require('../db/db.json');

router.use(express.json());

router.get('/', (req, res) => {
});

router
.get('/notes', (req, res) => {
    res.json(notes);
})

.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    notes.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(notes, null, 4), error => {
        if (error) {
            console.error(error);
            res.json('error');}
        else {
            res.json({status: 'success', body: req.body});}
    });
});


module.exports = router;