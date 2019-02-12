const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  restaurant_id: Number,
  business_days: Array,
  business_hours: Array,
  address: String,
  phone: String,
  website: String,
  map_photo: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Item page data
const izakaya = new Restaurant({
  restaurant_id: 1,
  business_days: [
    { monday: 1 },
    { tuesday: 2 },
    { wednesday: 3 },
    { thursday: 4 },
    { friday: 5 },
    { saturday: 6 },
    { sunday: 7 },
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
  phone: '(415) 724-5122',
  website: 'www.izakayasozai.com',
  map_photo: 'http://d2wufhbvuoea5v.cloudfront.net/izakaya_googlemaps_screenshot.jpg',
});

module.exports = {
  restaurantSchema, Restaurant, izakaya
};
