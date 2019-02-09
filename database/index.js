const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/restaurants');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to mongo');
});

let restaurantSchema = new mongoose.Schema({
  restaurant_id: Number,
  business_days: Array,
  business_hours: Array,
  address: String,
  phone: String,
  website: String,
  map_photo: String
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Item page data
let izakaya = new Restaurant({
  restaurant_id: 1,
  business_days: [
    { monday: 1 },
    { tuesday: 2 },
    { wednesday: 3 },
    { thursday: 4 },
    { friday: 5 },
    { saturday: 6 },
    { sunday: 7 }
  ],
  business_hours: [
    { monday: ['5:30', '10:00'] },
    { tuesday: ['5:30', '10:00'] },
    { wednesday: ['5:30', '10:00'] },
    { thursday: ['5:30', '10:00'] },
    { friday: ['5:30', '11:00'] },
    { saturday: ['5:00', '11:00'] },
    { sunday: ['5:00', '10:00'] },
  ],
  address: '1500 Irving St, San Francisco, CA 94122, USA',
  phone: '(415)724-5122',
  website: 'http://www.izakayasozai.com/',
  map_photo: 'http://d2wufhbvuoea5v.cloudfront.net/izakaya_googlemaps_screenshot.jpg'
});

let save = () => {
  izakaya.save((err) => {
    if (err) {
      console.log(err);
      return;
    }
  });

  for (var i = 2; i < 101; i++) {
    let fakeRestaurant = new Restaurant({
      restaurant_id: i,
      business_days: [
        { monday: 1 },
        { tuesday: 2 },
        { wednesday: 3 },
        { thursday: 4 },
        { friday: 5 },
        { saturday: 6 },
        { sunday: 7 }
      ],
      business_hours: [
        { monday: ['5:30', '10:00'] },
        { tuesday: ['5:30', '10:00'] },
        { wednesday: ['5:30', '10:00'] },
        { thursday: ['5:30', '10:00'] },
        { friday: ['5:30', '11:00'] },
        { saturday: ['5:00', '11:00'] },
        { sunday: ['5:00', '10:00'] },
      ],
      address: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.state() + ', ' + faker.address.zipCode() + ', ' + faker.address.country(),
      phone: faker.phone.phoneNumberFormat(),
      website: faker.internet.url(),
      map_photo: 'http://d2wufhbvuoea5v.cloudfront.net/izakaya_googlemaps_screenshot.jpg'
    })

    fakeRestaurant.save((err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
}

save();

let getIzakaya = (callback) => {
  Restaurant.findOne({restaurant_id: 1}, (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, data);
  })
};

module.exports = {
  getIzakaya
};