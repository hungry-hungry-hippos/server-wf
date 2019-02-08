const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restaurants');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongo');
});

let restaurantSchema = new mongoose.Schema({
  restaurant_id: Number,
  business_days: [
    {type: Number},
    {type: Number},
    {type: Number},
    {type: Number},
    {type: Number},
    {type: Number},
    {type: Number}
  ],
  business_hours: [
    {type: [String, String]},
    {type: [String, String]},
    {type: [String, String]},
    {type: [String, String]},
    {type: [String, String]},
    {type: [String, String]},
    {type: [String, String]},
  ],
  address: String,
  phone: String,
  website: String,
  map_photo: String
});

let Restaurant = mongoose.model('Restaurant', restaurantSchema);

let izakaya = new Restaurant({
  restaurant_id: 1,
  business_days: [
    {monday: 1},
    {tuesday: 2},
    {wednesday: 3},
    {thursday: 4},
    {friday: 5},
    {saturday: 6},
    {sunday: 7}
  ],
  business_hours: [
    {monday: ['5:30', '10:00']},
    {tuesday: ['5:30', '10:00']},
    {wednesday: ['5:30', '10:00']},
    {thursday: ['5:30', '10:00']},
    {friday: ['5:30', '11:00']},
    {saturday: ['5:00', '11:00']},
    {sunday: ['5:00', '10:00']},
  ],
  address: '1500 Irving St, San Francisco, CA 94122, USA',
  phone: '(415)724-5122',
  website: 'http://www.izakayasozai.com/',
  map_photo: 'still need to insert one'
});

izakaya.save((err) => {
  if (err) {
    console.log(err);
    return;
  }
  // if (err) return handleError(err);
});
