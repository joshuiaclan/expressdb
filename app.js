const express = require('express');
const app = express();
const db = require('./db');
const path = require('path');
const _port = 5000;

app.get('/api/users', async (req, res) => {
    try {
        let results = await db.getAll();
        res.json(results);
    }
    catch(err) {
        res.send(err);
    }    
});

app.get('/api/users/:id', async (req, res) => {
    try {
        let results = await db.getOne(req.params.id);
        res.json(results);
    }
    catch(err) {
        res.send(err);
    }    
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(_port, () => {
    console.log(`Server running on port ${_port}`);
});
