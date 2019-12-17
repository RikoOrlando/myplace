'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class UserPlace extends Model{}
  sequelize.init({
    UserId: DataTypes.INTEGER,
    PlaceId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, { sequelize });
  UserPlace.associate = function(models) {
    // associations can be defined here
  };
  return UserPlace;
};