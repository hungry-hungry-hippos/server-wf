const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3030;

app.use('/static', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Listening on port ${port}`))