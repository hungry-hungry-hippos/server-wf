const express = require('express');
const bodyParser = require('body-parser');

const { getIzakaya } = require('../database/index.js');

const app = express();
const port = 3030;

app.use(express.static('client/dist'));
app.use(bodyParser.json());

app.get('/izakayaInfo', (req, res) => {
  getIzakaya((err, data) => {
    if (err) {
      res.sendStatus(400);
      return;
    }
    res.status(200).send(data);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
