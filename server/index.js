const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const { getIzakaya } = require('../database/index.js');

const app = express();
const port = 3030;

app.use('/static', express.static(path.join(__dirname, '/client/dist')));

app.get('/izakayaInfo', (req, res) => {
  getIzakaya( (err, data) => {
    if (err) {
      res.sendStatus(418);
      return;
    }
    res.status(200).send(data);
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`))