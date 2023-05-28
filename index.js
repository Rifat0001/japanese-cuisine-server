const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running');
});

// main data 
app.get('/chefs', (req, res) => {
    res.send(chefs)
})

// view data details 
app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(n => n.id == id);
    console.log(selectedChef)
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`Api is running on port:${port}`)
})