import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import db from '../database/index';
import App from '../client/src/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

// describe('App Components', () => {
//   // fix this test, 'cannot read property of undefined'
//   it('renders all App components', () => {
//     const wrapper = shallow(<App />);
//     // expect(wrapper.find(App)).to.have.lengthOf(6);
//     expect(wrapper.find(App)).length.toBe(6);
//   });
// });

afterAll(() => db.db.close());

// below gets unhandled error before passing test suites
// describe('DB returns correct information', () => {
//   it('Should return restaurant address', () => {
//     db.getIzakaya((err, data) => {
//       expect(data.restaurant_id).toEqual(1);
//       expect(data.address).toBe('1500 Irving St, San Francisco, CA 94122, USA');
//     });
//   });

//   it('Should return restaurant phone', () => {
//     db.getIzakaya((err, data) => {
//       expect(data.phone).toBe('(415) 724-5122');
//     });
//   });
// });

// below runs test with no unhandled error but get 'async test' error
describe('DB returns correct information', () => {
  it('Should return restaurant address', (done) => {
    db.getIzakaya((err, data) => {
      expect(data.restaurant_id).toEqual(1);
      expect(data.address).toBe('1500 Irving St, San Francisco, CA 94122, USA');
      done();
    });
  });

  it('Should return restaurant phone', (done) => {
    db.getIzakaya((err, data) => {
      expect(data.phone).toBe('(415) 724-5122');
      done();
    });
  });
});
