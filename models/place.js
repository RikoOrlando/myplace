'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Place extends Model{}
  Place.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, { sequelize });
  Place.associate = function(models) {
    Place.belongsToMany(models.User, { through: models.UserPlace })
    // associations can be defined here
  };
  return Place;
};