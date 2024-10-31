const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, TRACY!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());