const mongoose = require('mongoose');

const { Restaurant } = require('./schema');

mongoose.connect('mongodb://localhost/restaurants', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => {
  console.log('Error connecting to mongo');
});
db.once('open', () => {
  console.log('connected to mongo');
});

const getIzakaya = (callback) => {
  Restaurant.findOne({ restaurant_id: 1 }, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  });
};

module.exports = { db, getIzakaya };
