const { response } = require('express');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

const rappers = {
    '21 Savage': {
        age: 29,
        birthName: 'Sheyaa Bin Abraham-Joseph',
        birthLocation: 'London, England',
    },
    'Chance the Rapper': {
        age: 29,
        birthName: 'Chancelor Bennett',
        birthLocation: 'Chicago, Illinois',
    },
    'Dylan': {
        age: 29,
        birthName: 'Dylan',
        birthLocation: 'Dylan',
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:rapperName', (req, res) => {
    res.json(rappers[req.params.rapperName]);
})
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}, and Leon is funny and awesome`);
});
