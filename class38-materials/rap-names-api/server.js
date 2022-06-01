const { response } = require('express');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

const savage = {
    age: 29,
    birthName: 'Sheyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
    res.json(savage);
})
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}, and Leon is funny and awesome`);
});
