'use strict';

let arr = [
  {
    name:'Ancol',
    location:"jakarta",
    description: "Max 255 char",
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Air Terjun Leuwi Hajo',
    location:"Bogor",
    description: "Max 255 char",
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Taman Safari Indonesia',
    location:"Bogor",
    description: "Max 255 char",
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Wisata Rumah Pohon Bekasi',
    location:"Bekasi",
    description: "Max 255 char",
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Gunung Tangkuban Perahu',
    location:"Bandung",
    description: "Max 255 char",
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Trans Studio Bandung',
    location:"Bandung",
    description: "Max 255 char",
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Waterboom Siwalk',
    location:"Cirebon",
    description: "Max 255 char",
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Bukit Gronggong',
    location:"Cirebon",
    description: "Max 255 char",
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Pantai Indrayanti',
    location:"Yogyakarta",
    description: "Max 255 char",
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Jalan Malioboro',
    location:"Yogyakarta",
    description: "Max 255 char",
    createdAt:new Date(),
    updatedAt:new Date()
  },

]

module.exports = {
  up: (queryInterface, Sequelize) => {
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
