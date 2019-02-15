const faker = require('faker');

const { Restaurant, izakaya } = require('./schema');

const saveData = () => {
  izakaya.save((err) => {
    if (err) return console.log(err);
    console.log('Izakaya info saved to db');
  });

  for (let i = 2; i < 101; i++) {
    const fakeRestaurant = new Restaurant({
      restaurant_id: i,
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
      address: faker.address.streetAddress() + ', ' + faker.address.city() + ', ' + faker.address.state() + ', ' + faker.address.zipCode() + ', ' + faker.address.country(),
      phone: faker.phone.phoneNumberFormat(),
      website: faker.internet.url(),
      map_photo: 'http://d2wufhbvuoea5v.cloudfront.net/izakaya_googlemaps_screenshot.jpg',
    });

    fakeRestaurant.save((err) => {
      if (err) return console.log(err);
      console.log('Fake restaurant info saved to db');
    });
  }
};

saveData();

module.exports.saveData = saveData;
