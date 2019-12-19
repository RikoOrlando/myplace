'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class UserPlace extends Model{}
  UserPlace.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UserId: DataTypes.INTEGER,
    PlaceId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, { sequelize });
  UserPlace.associate = function(models) {
    // associations can be defined here
    UserPlace.belongsTo(models.User),
    UserPlace.belongsTo(models.Place)
  };
  return UserPlace;
};