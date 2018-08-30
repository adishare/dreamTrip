'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Trips', [{
      title: 'Happy Trip',
      location: 'Pulau Seribu',
      date: new Date,
      meet_point: 'Bandara CGK',
      cost: 1000000,
      max: 10,
    },{
      title: 'Trip Yuk',
      location: 'Geopark ciletuh',
      date: new Date,
      meet_point: 'Sukabumi',
      cost: 2000000,
      max: 20,
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    
  }
};
