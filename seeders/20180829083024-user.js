'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
       const users = []
       const readFile = fs.readFileSync('user.csv', 'utf-8').split('\n')
       .map(data => data.split(','))
         .forEach(list => {
           users.push({
             name : list[0],
             age : list[1],
             gender : list[2],
             email : list[3],
             username : list[4],
             password : list[5],
             createdAt : new Date,
             updatedAt : new Date          
           })
         })
      //  console.log(users)
     
     return queryInterface.bulkInsert('Users',users, {})
    },
    
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {})
      /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      
      Example:
      return queryInterface.bulkDelete('Person', null, {});
      */
    }
  };
  