'use strict';

let data = [{
  first_name: 'Riko',
  last_name: 'Orlando',
  username: 'rikoorlando',
  email: 'rikoorlando@gmail.com',
  password: 'rikoorlando',
  description: 'Jangan Menyerah',
  birthday:null,
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  first_name: 'Sera',
  last_name: 'Fim',
  username: 'serafim',
  email: 'serafim@gmail.com',
  password: 'serafim',
  description: 'Jangan Menyerah',
  birthday:null,
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  first_name: 'Jimmy',
  last_name: 'Leonardo',
  username: 'jimmyleonardo',
  email: 'jimmyleonardo@gmail.com',
  password: 'jimmyleonardo',
  description: 'Jangan Menyerah',
  birthday:null,
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  first_name: 'Bayu',
  last_name: 'Octari',
  username: 'bayuoctari',
  email: 'bayuoctari@gmail.com',
  password: 'bayuoctari',
  description: 'Jangan Menyerah',
  birthday:null,
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  first_name: 'Novi',
  last_name: 'Andriani',
  username: 'noviandriani',
  email: 'noviandriani@gmail.com',
  password: 'noviandriani',
  description: 'Jangan Menyerah',
  birthday:null,
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  first_name: 'Febriani',
  last_name: 'Kenedy',
  username: 'febrianikenedy',
  email: 'febrianikenedy@gmail.com',
  password: 'febrianikenedy',
  description: 'Jangan Menyerah',
  birthday:null,
  createdAt:new Date(),
  updatedAt:new Date()
}
]



module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Users', data, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
