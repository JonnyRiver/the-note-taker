const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000
const path = require('path');
// const uniqid = require('uniqid');


const notes = require('./Develop/db/db.json');
app.use(express.json());
require('./routes/apiRoutes/notes.js')(app);

app.get('/', (req, res) => {
    console.log(req);
    res.sendFile('./Develop/public/index.html', {root:__dirname});

});

// app.get('/api/notes', (req, res) => {
//     res.json(allNotes.slice(1));
// });

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

app.get('/assets/css', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/assets/css/styles.css'));
});

app.get('/assets/js', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/assets/js/index.js'));
});




app.listen(PORT,() => {
    console.log(`You're on PORT ${PORT}`);
});