'use strict';


let arr = [
  {
  UserId: 1,
  PlaceId:1,
  rating: 5,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 1,
  PlaceId:2,
  rating: 3,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 1,
  PlaceId:4,
  rating: 4,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 1,
  PlaceId:7,
  rating: 2,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 1,
  PlaceId:9,
  rating: 5,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 2,
  PlaceId:1,
  rating: 1,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 2,
  PlaceId:3,
  rating: 4,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 2,
  PlaceId:5,
  rating: 5,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 2,
  PlaceId:7,
  rating: 4,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 2,
  PlaceId:10,
  rating: 4,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 3,
  PlaceId:2,
  rating: 4,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 3,
  PlaceId:6,
  rating: 3,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 3,
  PlaceId:8,
  rating: 5,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 4,
  PlaceId:1,
  rating: 4,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 4,
  PlaceId:5,
  rating: 5,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 4,
  PlaceId:7,
  rating: 4,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 4,
  PlaceId:9,
  rating: 5,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 5,
  PlaceId:2,
  rating: 3,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 5,
  PlaceId:5,
  rating: 3,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 5,
  PlaceId:8,
  rating: 5,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 5,
  PlaceId:9,
  rating: 4,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 6,
  PlaceId:1,
  rating: 4,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 6,
  PlaceId:4,
  rating: 4,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 6,
  PlaceId:7,
  rating: 5,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},
{
  UserId: 6,
  PlaceId:9,
  rating: 4,
  review: "Max 255 char",
  createdAt:new Date(),
  updatedAt:new Date()
},

]
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userPlaces', arr, {});
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
    return queryInterface.bulkDelete('userPlaces', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
