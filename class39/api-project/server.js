const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/css/style.css', (req, res) => {
    res.sendFile(__dirname + '/css/style.css');
});
app.get('/js/main.js', (req, res) => {
    res.sendFile(__dirname + '/js/main.js');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
