'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class UserPlace extends Model{
    static rating(arr){
      let sum = 0
      arr.forEach(element => {
        sum+=element.UserPlace.rating
      });
      return sum/arr.length

    }
  }
  UserPlace.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UserId: DataTypes.INTEGER,
    PlaceId: DataTypes.INTEGER,
    rating:{
      type:DataTypes.INTEGER,
      validate:{
        max:5
      }
    },
    review: DataTypes.STRING
  }, { sequelize });
  UserPlace.associate = function(models) {
    // associations can be defined here
    UserPlace.belongsTo(models.User),
    UserPlace.belongsTo(models.Place)
  };
  return UserPlace;
};